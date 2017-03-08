Object.prototype.forEachValue = function (handler) {
    if (!handler)
        return;

    for (var p in this) {
        if (typeof this[p] === "object")
            handler(p, this[p]);
    }
};

(function () {
    "use strict";
    var appName = "hLangs";
    var templatesRoot = "templates/";
    var codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/";
    var codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/src/";
    var app = angular.module(appName, ["ngSanitize", "ui.router"]);

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

    app.value("data", {});

    app.run(function (data, $http) {

        var dataToLoad = [
            "libraries",
            "languages",
            "projects",
            "tags",
            "implementations",
            "runtimes",
            "ides"
        ];

        function CreateLanguages(target) {
            for (var p in target)
                target[p].languages = [];
        }

        function ProcessData(data) {
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

        function LoadLibraries(libraries) {
            var head = document.getElementsByTagName("head")[0];

            function LoadScript(fileName) {
                var fileref = document.createElement('script')
                fileref.setAttribute("type", "text/javascript")
                fileref.setAttribute("src", fileName);

                head.appendChild(fileref);
            }

            function LoadStyle(fileName) {
                var fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", fileName);

                head.appendChild(fileref);
            }

            for (var id in libraries) {
                var library = libraries[id];

                if (library.css)
                    library.css.forEach(function (css) {
                        LoadStyle(library.baseUrl + css + ".css");
                    });

                if (library.script)
                    library.script.forEach(function (js) {
                        LoadScript(library.baseUrl + js + ".js");
                    });
            }
        }

        var loaded = 0;
        function GetData(dataName, callback) {
            $http.get("data/" + dataName + ".json")
                .then(function (response) {
                    loaded++;
                    data[dataName] = response.data;
                    if (callback)
                        callback();
                });
        }

        for (var dataIndex = 0; dataIndex < dataToLoad.length; dataIndex++) {
            GetData(dataToLoad[dataIndex], function () {
                if (loaded == dataToLoad.length) {
                    LoadLibraries(data.libraries);
                    ProcessData(data);
                }
            });
        }
    });

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

    app.component("home", {
        templateUrl: templatesRoot + "home.html",
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
        })
    });

    app.directive("codeHighlight", function ($http) {
        return {
            restrict: "E",
            link: function ($scope, element, attrs) {
                $http.get(attrs.src)
                    .then(function (response) {
                        var cm = CodeMirror(element[0], {
                            mode: attrs.language,
                            value: response.data,
                            lineNumbers: true,
                            lineWrapping: true,
                            theme: "ttcn",
                            readOnly: true
                        });
                    });
            }
        }
    });

    app.component("project", {
        templateUrl: templatesRoot + "project.html",
        controller: BuildController(function (vm, data) {
            vm.projectId = vm.$stateParams.id;
            vm.project = data.projects[vm.projectId];

            if (!vm.project.implementations) {
                vm.project.implementations = [];

                switch (vm.project.type) {
                    case "code":
                        vm.project.languages.forEach(function (langId) {
                            vm.project.implementations.push(new CodeImplementation(
                                langId,
                                data.languages[langId],
                                vm.projectId,
                                vm.project,
                                vm.codeRoot,
                                vm.codeRawRoot));
                        });
                        break;

                    case "steps":
                        var definitions = data.implementations[vm.projectId];
                        if (definitions) {
                            data.languages.forEachValue(function (langId, lang) {
                                var definition = definitions[langId];
                                if (definition) {
                                    vm.project.implementations.push(new StepsImplementation(
                                        langId,
                                        lang,
                                        vm.projectId,
                                        vm.project,
                                        definition));
                                }
                            });
                        }
                        break;
                }
            }
        })
    });

    app.component("language", {
        templateUrl: templatesRoot + "language.html",
        controller: BuildController(function (vm, data) {
            vm.languageId = vm.$stateParams.id;
            vm.language = data.languages[vm.languageId];

            if (!vm.language.implementations) {
                vm.language.implementations = [];

                data.projects.forEachValue(function (projectId, project) {
                    switch (project.type) {
                        case "code":
                            if (project.languages && project.languages.indexOf(vm.languageId) != -1) {
                                vm.language.implementations.push(new CodeImplementation(
                                    vm.languageId,
                                    vm.language,
                                    projectId,
                                    project,
                                    vm.codeRoot,
                                    vm.codeRawRoot));
                            }
                            break;

                        case "steps":
                            var definitions = data.implementations[projectId];
                            if (definitions && definitions[vm.languageId]) {
                                vm.language.implementations.push(new StepsImplementation(
                                    vm.languageId,
                                    vm.language,
                                    projectId,
                                    project,
                                    definitions[vm.languageId]));
                            }
                            break;
                    }
                });
            }
        })
    });

    app.component("codeImplementation", {
        templateUrl: templatesRoot + "codeImplementation.html",
        bindings: {
            implementation: "<"
        },
        controller: function () {
            var vm = this;
            angular.extend(vm, vm.implementation)
        }
    });

    app.component("stepsImplementation", {
        templateUrl: templatesRoot + "stepsImplementation.html",
        bindings: {
            steps: "<"
        }
    });

    app.component("compareSelector", {
        templateUrl: templatesRoot + "compareSelector.html",
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
            vm.projects = data.projects;
        })
    });

    app.component("languageSelector", {
        templateUrl: templatesRoot + "languageSelector.html",
        bindings: {
            language: "=",
            languages: "<"
        }
    });

    app.component("compare", {
        templateUrl: templatesRoot + "compare.html",
        controller: BuildController(function (vm, data) {
            vm.firstId = vm.$stateParams.first;
            vm.secondId = vm.$stateParams.second;
            vm.first = data.languages[vm.firstId];
            vm.second = data.languages[vm.secondId];

            if (!vm.first || !vm.second)
                vm.$state.go("home");

            vm.projects = [];

            data.projects.forEachValue(function (projectId, project) {
                if (!project.show)
                    return;

                switch (project.type) {
                    case "code":
                        if (!project.languages
                            ||
                            project.languages.indexOf(vm.firstId) == -1
                            ||
                            project.languages.indexOf(vm.secondId) == -1)
                            return;

                        project.firstImplementation = new CodeImplementation(
                            vm.firstId,
                            data.languages[vm.firstId],
                            projectId,
                            project,
                            vm.codeRoot,
                            vm.codeRawRoot);
                        project.secondImplementation = new CodeImplementation(
                            vm.secondId,
                            data.languages[vm.secondId],
                            projectId,
                            project,
                            vm.codeRoot,
                            vm.codeRawRoot);

                        vm.projects.push(project);
                        break;
                    case "steps":
                        var projectDefinition = data.implementations[projectId];
                        if (!projectDefinition)
                            return;

                        var firstDefinition = projectDefinition[vm.firstId];
                        var secondDefinition = projectDefinition[vm.secondId];
                        if (!firstDefinition || !secondDefinition)
                            return;

                        project.firstImplementation = new StepsImplementation(
                            vm.firstId,
                            vm.first,
                            projectId,
                            project,
                            firstDefinition);
                        project.secondImplementation = new StepsImplementation(
                            vm.secondId,
                            vm.second,
                            projectId,
                            project,
                            secondDefinition);

                        vm.projects.push(project);
                        break;
                }
            });
        })
    });

    app.config(["$httpProvider", "$sceProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($httpProvider, $sceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
            $httpProvider.defaults.useXDomain = true;
            $locationProvider.html5Mode(true);
            $sceProvider.enabled(false);

            $stateProvider.state({
                name: "home",
                url: "/",
                component: "home"
            });

            $stateProvider.state({
                name: "project",
                url: "/project/:id",
                component: "project"
            });

            $stateProvider.state({
                name: "language",
                url: "/language/:id",
                component: "language"
            });

            $stateProvider.state({
                name: "compare",
                url: "/compare/:first/:second",
                component: "compare",
                params: {
                    first: null,
                    second: null
                }
            });

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();