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
    var codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/src/";
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

    app.run(function (data, $http, $window, $transitions, $location) {

        $window.ga("create", "UA-94110702-1", "auto");
        $transitions.onSuccess({}, () => {
            $window.ga("send", "pageview", $location.path());
        });

        var dataToLoad = [
            "libraries",
            "languages",
            "projects",
            "programs",
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

    app.component("home", {
        templateUrl: templatesRoot + "home.html",
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
                $http.get(attrs.src)
                    .then(function (response) {
                        element.html("");
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
        templateUrl: templatesRoot + "language.html",
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

    app.component("projectSelector",{
        templateUrl: templatesRoot + "projectSelector.html",
        bindings:{
            project: "=",
            projects: "<"
        }
    });

    app.component("compare", {
        templateUrl: templatesRoot + "compare.html",
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

    app.config(["$httpProvider", "$sceProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($httpProvider, $sceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
            $httpProvider.defaults.useXDomain = true;
            //$locationProvider.html5Mode(true);
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
                url: "/compare/:first/:second/:project",
                component: "compare",
                params: {
                    first: null,
                    second: null,
                    project: null
                }
            });

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();
