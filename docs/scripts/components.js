"use strict";
const hljs = require("hljs");

const codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/src/";
const codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/src/";

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
    return function (data, $http, $stateParams, $timeout, $rootScope, $state, metadata) {
        var vm = this;
        vm.codeRoot = codeRoot;
        vm.codeRawRoot = codeRawRoot;
        vm.$http = $http;
        vm.$stateParams = $stateParams;
        vm.$timeout = $timeout;
        vm.$rootScope = $rootScope;
        vm.$state = $state;
        vm.$metadata = metadata;

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

function addToKeywords(keywords, list, addId) {
    for (var id in list){
        keywords.push(list[id].name);
        if (addId)
            keywords.push(id);
    }
}

module.exports = function (app) {

    app.component("home", {
        templateUrl: templatePath("home"),
        controller: BuildController(function (vm, data) {
            vm.languages = data.languages;
            vm.programs = data.programs;
            vm.projects = data.projects;

            var keywords = [
                "programming languages",
                "programming language compare",
                "compare"
            ];

            addToKeywords(keywords, vm.languages, true);
            addToKeywords(keywords, vm.projects);

            vm.$metadata.set({
                title: "Home",
                keywords: keywords
            });
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
           
            var keywords = [
                "how to",
                vm.project.name
            ];

             vm.project.implementations.forEach(function (implementation) {
                keywords.push(implementation.languageId);
                keywords.push(implementation.language.name);
            });

            vm.$metadata.set({
                title: vm.project.name,
                description: "How to handle " + vm.project.name + " in various programming languages.",
                keywords: keywords
            });
        })
    });

    app.component("language", {
        templateUrl: templatePath("language"),
        controller: BuildController(function (vm, data) {
            vm.languageId = vm.$stateParams.id;
            vm.language = data.languages[vm.languageId];

            if (!vm.language.implementations) {
                vm.language.implementations = [];

                for (var projectId in data.projects) {
                    var project = data.projects[projectId];
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
                }
            }

            var keywords = [
                "how to",
                vm.languageId,
                vm.language.name
            ];


            vm.language.implementations.forEach(function (implementation) {
                keywords.push(implementation.project.name);
            });

            vm.$metadata.set({
                title: vm.language.name,
                description: "Implementing various features in " + vm.language.name,
                keywords: keywords
            });
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

            var keywords = [
                "how to",
                vm.firstId,
                vm.first.name,
                vm.secondId,
                vm.second.name,
                "compare"
            ];

            if (vm.projectId && data.projects[vm.projectId]) {
                keywords.push(data.projects[vm.projectId].name);
                AddProject(vm.projectId, data.projects[vm.projectId]);
            }
            else
                for (var projectId in data.projects) {
                    AddProject(projectId, data.projects[projectId]);
                }

            vm.$metadata.set({
                title: vm.first.name + " vs " + vm.second.name,
                description: "Comparing " + vm.first.name + " and " + vm.second.name + " programming languages",
                keywords: keywords
            });
        })
    });
}