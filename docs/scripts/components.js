"use strict";
const hljs = require("hljs");

const codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/src/";
const codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/src/";

Object.prototype.forEachValue = function (handler) {
    if (!handler)
        return;

    for (var p in this) {
        if (typeof this[p] === "object")
            handler(p, this[p]);
    }
};

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

module.exports = function (app) {
    // app.directive("codeHighlight", function ($http) {
    //     return {
    //         restrict: "E",
    //         link: function ($scope, element, attrs) {
    //             var pre = document.createElement("pre");
    //             if (attrs.linenumbers && attrs.linenumbers != "false")
    //                 pre.className = "line-numbers";
    //             var code = document.createElement("code");
    //             code.className = attrs.hljs;
    //             pre.appendChild(code);

    //             if (attrs.src) {
    //                 element.html("<br/><img src=\"images/loading.gif\"/>");

    //                 $http.get(attrs.src)
    //                     .then(function (response) {
    //                         element.html("");
    //                         code.textContent = response.data;
    //                         try {
    //                             hljs.highlightBlock(code);
    //                         } catch (error) {
    //                             console.log(error);
    //                         }
    //                         element.html(pre.outerHTML);
    //                     });

    //             }
    //             else {
    //                 code.textContent = attrs.code;
    //                 hljs.highlightBlock(code);
    //                 element.html(pre.outerHTML);
    //             }
    //         }
    //     }
    // });

    app.component("home", {
        templateUrl: templatePath("home"),
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
            vm.programs = data.programs;
            vm.projects = data.projects;
        })
    });

    app.component("project", {
        templateUrl: templatePath("project"),
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
        templateUrl: templatePath("language"),
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
        templateUrl: templatePath("codeImplementation"),
        bindings: {
            implementation: "<"
        }
    });

    app.component("stepsImplementation", {
        templateUrl: templatePath("stepsImplementation"),
        bindings: {
            steps: "<"
        }
    });

    app.component("compareSelector", {
        templateUrl: templatePath("compareSelector"),
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
            vm.projects = data.projects;
        })
    });

    app.component("languageSelector", {
        templateUrl: templatePath("languageSelector"),
        bindings: {
            language: "=",
            languages: "<"
        }
    });

    app.component("projectSelector", {
        templateUrl: templatePath("projectSelector"),
        bindings: {
            project: "=",
            projects: "<"
        }
    });

    app.component("compare", {
        templateUrl: templatePath("compare"),
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
}