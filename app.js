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
                if (loaded == dataToLoad.length)
                    ProcessData(data);
            });
        }
    });

    function BuildController(onLoad) {
        return function (data, $http, $stateParams, $timeout) {
            var vm = this;
            vm.codeRoot = codeRoot;
            vm.codeRawRoot = codeRawRoot;
            vm.$http = $http;
            vm.$stateParams = $stateParams;
            vm.$timeout = $timeout;

            if (onLoad)
                onLoad(vm, data);
        }
    }

    app.component("home", {
        templateUrl: templatesRoot + "home.html",
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
            vm.projects = data.projects;
        })
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
            else
                vm.$timeout(function () { Prism.highlightAll(); }, 500);

            vm.$timeout(function () { Prism.highlightAll(); }, 500);
        })
    });

    app.component("steps", {
        templateUrl: templatesRoot + "steps.html",
        bindings: {
            steps: "<"
        }
    });

    app.component("specific", {
        templateUrl: templatesRoot + "specific.html",
        controller: BuildController(function (vm) {
        })
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

            $stateProvider.state({
                name: "specific",
                url: "/project/:id/:lang",
                component: "specific"
            });

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();