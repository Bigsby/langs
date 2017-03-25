"use strict";
requirejs.config({
    waitSeconds: 10,
    paths: {
        text: "libs/text",
        json: "libs/json",
        data: "./../data/",
        cdn: "https://cdnjs.cloudflare.com/ajax/libs"
    }
});

var Helpers = new (function helpers() {
    var templateRoot = "templates/";
    this.templatePath = function (name) {
        return templateRoot + name + ".html";
    }
});

requirejs(["json!data/libraries.json"], function (libraries) {
    requirejs(libraries.firstRequires, function () {
        var dataToLoad = [];
        libraries.data.forEach(function (dataFile) {
            dataToLoad.push("json!data/" + dataFile + ".json");
        });
        requirejs(dataToLoad.concat(libraries.secondRequires), function () {
            var data = {};

            (function LoadLibraries(libraries) {
                var head = document.getElementsByTagName("head")[0];

                function LoadScript(fileName) {
                    var fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("src", fileName);

                    head.appendChild(fileref);
                }

                function LoadStyle(fileName) {
                    var fileref = document.createElement("link");
                    fileref.setAttribute("rel", "stylesheet");
                    fileref.setAttribute("type", "text/css");
                    fileref.setAttribute("href", fileName);

                    head.appendChild(fileref);
                }

                for (var id in libraries) {
                    var library = libraries[id];
                    var baseUrl = library.baseUrl || "";

                    if (library.css)
                        library.css.forEach(function (css) {
                            LoadStyle(baseUrl + css + ".css");
                        });

                    if (library.script)
                        library.script.forEach(function (js) {
                            LoadScript(baseUrl + js + ".js");
                        });
                }
            })(libraries.dynamic);

            for (var dataIndex = 0; dataIndex < libraries.data.length; dataIndex++) {
                data[libraries.data[dataIndex]] = arguments[dataIndex];
            }

            appSpecifics.ProcessData(data);

            var appName = "theApp";
            var templateRoot = "templates/";
            var app = angular.module(appName, libraries.angularModules);

            app.value("data", data);

            app.run(function ($window, $transitions, $location) {

                if (libraries.ga) {
                    $window.ga("create", libraries.ga, "auto");
                    $transitions.onSuccess({}, () => {
                        $window.ga("send", "pageview", $location.path());
                    });
                }

            });


            appSpecifics.RegisterComponents(app);

            app.config(["$httpProvider", "$sceProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider",
                function ($httpProvider, $sceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
                    $httpProvider.defaults.useXDomain = true;
                    $sceProvider.enabled(false);

                    appSpecifics.RegisterStates($stateProvider);

                    $urlRouterProvider.otherwise("/");
                }
            ]);

            angular.bootstrap(document, [appName]);
        });
    });
});

var appSpecifics = new (function () {
    Object.prototype.forEachValue = function (handler) {
        if (!handler)
            return;

        for (var p in this) {
            if (typeof this[p] === "object")
                handler(p, this[p]);
        }
    };

    var codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/src/";
    var codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/src/";

    function CreateLanguages(target) {
        for (var p in target)
            target[p].languages = [];
    }

    this.ProcessData = function (data) {
        CreateLanguages(data.runtimes);
        CreateLanguages(data.ides);

        function FindAndReplace(target, prop, list, addLanguage) {
            var result = [];
            var source = target[prop];

            if (source) {
                source.forEach(function (id) {
                    var item = list[id];
                    if (item) {

                        if (addLanguage)
                            item.languages.push(target);

                        result.push(item);
                    }
                });
                target[prop] = result;
            }
        }

        data.languages.forEachValue(function (languageId, language) {
            FindAndReplace(language, "runtimes", data.runtimes, true);
            FindAndReplace(language, "ides", data.ides, true);
            FindAndReplace(language, "tags", data.tags);
        });

        data.projects.forEachValue(function (projectId, project) {
            project.isImplemented = project.type === 'steps' || (project.languages && project.languages.length);
        });
    }

    this.RegisterStates = function (stateProvider) {
        stateProvider.state({
            name: "home",
            url: "/",
            component: "home"
        });

        stateProvider.state({
            name: "project",
            url: "/project/:id",
            component: "project"
        });

        stateProvider.state({
            name: "language",
            url: "/language/:id",
            component: "language"
        });

        stateProvider.state({
            name: "compare",
            url: "/compare/:first/:second/:project",
            component: "compare",
            params: {
                first: null,
                second: null,
                project: null
            }
        });
    }

    function Implementation(type, languageId, language, projectId, project) {
        return {
            type: type,
            languageId: languageId,
            language: language,
            projectId: projectId,
            project: project
        };
    }

    function CodeImplementation(languageId, language, projectId, project, codeRoot, codeRawRoot) {
        var implementation = new Implementation("code", languageId, language, projectId, project);
        implementation.codeRoot = codeRoot;
        implementation.codeRawRoot = codeRawRoot;
        return implementation;
    }

    function StepsImplementation(languageId, language, projectId, project, steps) {
        var implementation = new Implementation("steps", languageId, language, projectId, project);
        implementation.steps = steps;
        return implementation;
    }

    function BuildController(onLoad) {
        return function (data, $http, $stateParams, $timeout, $rootScope, $state) {
            var vm = this;
            vm.codeRoot = codeRoot;
            vm.codeRawRoot = codeRawRoot;
            vm.$http = $http;
            vm.$stateParams = $stateParams;
            vm.$timeout = $timeout;
            vm.$rootScope = $rootScope;
            vm.$state = $state;

            if (onLoad)
                onLoad(vm, data);

            vm.filteredProjects = function () {
                var result = {};

                for (var k in data.projects)
                    if (data.projects[k] && data.projects[k].show && data.projects[k].isImplemented)
                        result[k] = data.projects[k];

                return result;
            }
        }
    }

    function GetImplementation(data, languageId, language, projectId, project, codeRoot, codeRawRoot) {
        switch (project.type) {
            case "code":
                if (project.languages && project.languages.indexOf(languageId) != -1) {
                    return new CodeImplementation(
                        languageId,
                        language,
                        projectId,
                        project,
                        codeRoot,
                        codeRawRoot);
                }
                break;

            case "steps":
                var definitions = data.implementations[projectId];
                if (definitions && definitions[languageId]) {
                    return new StepsImplementation(
                        languageId,
                        language,
                        projectId,
                        project,
                        definitions[languageId]);
                }
                break;
        }
    }

    this.RegisterComponents = function (app) {

        app.component("home", {
            templateUrl: Helpers.templatePath("home"),
            controller: BuildController(function (vm, data) {
                vm.languages = data.languages;
                vm.programs = data.programs;
            })
        });

        app.directive("codeHighlight", function ($http) {
            return {
                restrict: "E",
                link: function ($scope, element, attrs) {
                    element.html("<br/><img src='images/loading.gif'></img>");
                    var codeElement =
                        $http.get(attrs.src)
                            .then(function (response) {
                                element.html("");
                                try {
                                    var pre = document.createElement('pre');
                                    pre.className = "line-numbers";
                                    var code = document.createElement('code');
                                    code.className = 'language-' + attrs.language;
                                    pre.appendChild(code);
                                    code.textContent = response.data;
                                    Prism.highlightElement(code);
                                    element.html(pre.outerHTML);
                                } catch (error) {
                                    element.text = response.data;
                                }

                                // var cm = CodeMirror(element[0], {
                                //     mode: attrs.language,
                                //     value: response.data,
                                //     lineNumbers: true,
                                //     lineWrapping: true,
                                //     theme: "ttcn",
                                //     readOnly: true
                                // });
                            });
                }
            }
        });

        app.component("project", {
            templateUrl: Helpers.templatePath("project"),
            controller: BuildController(function (vm, data) {
                vm.projectId = vm.$stateParams.id;
                vm.project = data.projects[vm.projectId];

                if (!vm.project.implementations) {
                    vm.project.implementations = [];

                    vm.project.languages.forEach(function (languageId) {
                        var implementation = GetImplementation(
                            data,
                            languageId,
                            data.languages[languageId],
                            vm.projectId,
                            vm.project,
                            vm.codeRoot,
                            vm.codeRawRoot);

                        if (implementation)
                            vm.project.implementations.push(implementation);
                    });
                }
            })
        });

        app.component("language", {
            templateUrl: Helpers.templatePath("language"),
            controller: BuildController(function (vm, data) {
                vm.languageId = vm.$stateParams.id;
                vm.language = data.languages[vm.languageId];

                if (!vm.language.implementations) {
                    vm.language.implementations = [];

                    data.projects.forEachValue(function (projectId, project) {
                        var definitions = data.implementations[projectId];
                        var implementation = GetImplementation(
                            data,
                            vm.languageId,
                            vm.language,
                            projectId,
                            project,
                            vm.codeRoot,
                            vm.codeRawRoot);
                        if (implementation)
                            vm.language.implementations.push(implementation);
                    });
                }
            })
        });

        app.component("codeImplementation", {
            templateUrl: Helpers.templatePath("codeImplementation"),
            bindings: {
                implementation: "<"
            }
        });

        app.component("stepsImplementation", {
            templateUrl: Helpers.templatePath("stepsImplementation"),
            bindings: {
                steps: "<"
            }
        });

        app.component("compareSelector", {
            templateUrl: Helpers.templatePath("compareSelector"),
            controller: BuildController(function (vm, data) {
                vm.languages = data.languages;
                vm.projects = data.projects;
            })
        });

        app.component("languageSelector", {
            templateUrl: Helpers.templatePath("languageSelector"),
            bindings: {
                language: "=",
                languages: "<"
            }
        });

        app.component("projectSelector", {
            templateUrl: Helpers.templatePath("projectSelector"),
            bindings: {
                project: "=",
                projects: "<"
            }
        });

        app.component("compare", {
            templateUrl: Helpers.templatePath("compare"),
            controller: BuildController(function (vm, data) {
                vm.firstId = vm.$stateParams.first;
                vm.secondId = vm.$stateParams.second;
                vm.projectId = vm.$stateParams.project;
                vm.first = data.languages[vm.firstId];
                vm.second = data.languages[vm.secondId];

                if (!vm.first || !vm.second)
                    vm.$state.go("home");

                vm.projects = [];

                function AddProject(projectId, project) {
                    if (!project.show)
                        return;

                    var firstImplementation = GetImplementation(
                        data,
                        vm.firstId,
                        vm.first,
                        projectId,
                        project,
                        vm.codeRoot,
                        vm.codeRawRoot);

                    var secondImplementation = GetImplementation(
                        data,
                        vm.secondId,
                        vm.second,
                        projectId,
                        project,
                        vm.codeRoot,
                        vm.codeRawRoot);

                    if (firstImplementation && secondImplementation) {
                        project.firstImplementation = firstImplementation;
                        project.secondImplementation = secondImplementation;
                        vm.projects.push(project);
                    }
                }

                if (vm.projectId && data.projects[vm.projectId]) {
                    AddProject(vm.projectId, data.projects[vm.projectId]);
                }
                else
                    data.projects.forEachValue(function (projectId, project) {
                        AddProject(projectId, project);
                    });
            })
        });
    };
});

