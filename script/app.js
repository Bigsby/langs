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
    var codeRoot = "https://github.com/Bigsby/HelloLanguages/tree/master/";
    var codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/";
    var app = angular.module(appName, ["ngSanitize", "ui.router"]);

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

            for (var id in libraries)
            {
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
        return function (data, $http, $stateParams, $timeout, $rootScope) {
            var vm = this;
            vm.codeRoot = codeRoot;
            vm.codeRawRoot = codeRawRoot;
            vm.$http = $http;
            vm.$stateParams = $stateParams;
            vm.$timeout = $timeout;
            vm.$rootScope = $rootScope;

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
                    CodeMirror(element[0], {
                        mode: attrs.language,
                        value: response.data,
                        lineNumbers: true,
                        theme: "ttcn",
                        readOnly: "nocursor"
                    });
                });
            }
        }
    });

    app.component("project", {
        templateUrl: templatesRoot + "project.html",
        controller: BuildController(function (vm, data) {
            vm.projectId = vm.$stateParams.id;
            var project = data.projects[vm.projectId];
            vm.project = project;

            if (!project.implementations) {
                project.implementations = [];

                switch (project.type) {
                    case "code":
                        project.languages.forEach(function (langId) {
                            var implementation = {
                                languageId: langId,
                                language: data.languages[langId]
                            };

                            project.implementations.push(implementation);
                        });
                        break;

                    case "steps":
                        var definitions = data.implementations[vm.projectId];
                        if (definitions) {
                            data.languages.forEachValue(function (langId, lang) {
                                var definition = definitions[langId];
                                if (definition)
                                    project.implementations.push({
                                        language: lang,
                                        steps: definition
                                    });
                            });
                        }
                        break;
                }
            }

            //vm.$timeout(function () { hljs.initHighlightingOnLoad(); }, 1000);
        })
    });

    app.component("steps", {
        templateUrl: templatesRoot + "steps.html",
        bindings: {
            steps: "<"
        }
    });

    app.config(["$httpProvider", "$sceProvider", "$stateProvider", "$urlRouterProvider",
        function ($httpProvider, $sceProvider, $stateProvider, $urlRouterProvider) {
            $httpProvider.defaults.useXDomain = true;
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

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();