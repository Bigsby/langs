var data = {
    languages: [
        {
            id: "js",
            highlight: "javascript",
            name: "JavaScript",
            link: "https://www.javascript.com/",
            runtimes: ["node"],
            ides: ["npp", "vscode"],
            current: true
        },
        {
            id: "cpp",
            highlight: "cpp",
            name: "C++",
            link: "http://www.cplusplus.com/",
            runtimes: ["native"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "py",
            highlight: "python",
            name: "Python",
            link: "https://www.python.org/",
            runtimes: ["python"],
            ides: ["vscode"],
            current: true
        },
        {
            id: "fs",
            highlight: "fsharp",
            name: "F#",
            link: "http://fsharp.org/",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "go",
            highlight: "go",
            name: "Go",
            link: "https://golang.org/",
            ides: ["vscode", "eclipse"],
            current: true
        },
        {
            id: "rb",
            highlight: "ruby",
            name: "Ruby",
            link: "https://www.ruby-lang.org/",
            runtimes: ["ruby"],
            ides: ["vscode", "rubyMine"],
            current: true
        },
        {
            id: "cs",
            highlight: "csharp",
            name: "C#",
            link: "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "java",
            highlight: "java",
            name: "Java",
            link: "https://www.java.com/",
            runtimes: ["java"],
            ides: ["vscode", "eclipse", "intelliJ", "netbeans"],
            current: true
        },
        {
            id: "rs",
            highlight: "rust",
            name: "Rust",
            link: "https://www.rust-lang.org/",
            current: false
        },
        {
            id: "scala",
            highlight: "scala",
            name: "Scala",
            link: "https://www.scala-lang.org/",
            current: false
        },
        {
            id: "hs",
            highlight: "haskell",
            name: "Haskell",
            link: "https://www.haskell.org/",
            current: false
        },
        {
            id: "lua",
            highlight: "lua",
            name: "Lua",
            link: "https://www.lua.org/",
            current: false
        },
        {
            id: "pl",
            highlight: "perl",
            name: "Perl",
            link: "https://www.perl.org/",
            current: false
        }
    ],
    projects: [
        {
            id: "hello",
            name: "Hello World!",
            description: "Of course, the first project is a 'Hello, World'.",
            languages: ["js", "cpp"]
        },
        {
            id: "loop",
            name: "Looping",
            description: "Repeating until...",
            languages: []
        },
        {
            id: "iterate",
            name: "Iterating a sequence",
            description: "Repeat for every item in a sequence.",
            languages: []
        }
    ],
    runtimes: [
        {
            id: "node",
            name: "NodeJS",
            link: "https://nodejs.org/"
        },
        {
            id: "native",
            name: "Native"
        },
        {
            id: "python",
            name: "Python",
            link: "https://www.python.org/downloads/"
        },
        {
            id: "net",
            name: ".Net",
            link: "https://www.microsoft.com/net"
        },
        {
            id: "ruby",
            name: "Ruby",
            link: "https://www.ruby-lang.org/en/downloads/"
        },
        {
            id: "java",
            name: "Java SE",
            link: "https://java.com/en/download/"
        }
    ],
    ides: [
        {
            id: "npp",
            name: "Notepad++",
            link: "https://notepad-plus-plus.org/"
        },
        {
            id: "vs",
            name: "Visual Studio",
            link: "https://www.visualstudio.com/"
        },
        {
            id: "vscode",
            name: "Visual Studio Code",
            link: "https://code.visualstudio.com/"
        },
        {
            id: "eclipse",
            name: "Eclipse",
            link: "http://www.eclipse.org/"
        },
        {
            id: "rubyMine",
            name: "RubyMine",
            link: "https://www.jetbrains.com/ruby/"
        },
        {
            id: "intelliJ",
            name: "InteliiJ IDEA",
            link: "https://www.jetbrains.com/idea/"
        },
        {
            id: "netbeans",
            name: "NetBeans",
            link: "https://netbeans.org/"
        }
    ]
};

(function () {
    var appName = "hLangs";
    var templatesRoot = "templates/";

    (function () {
        data.runtimes.forEach(function (rt) { rt.languages = []; });
        data.ides.forEach(function (ide) { ide.languages = []; });

        function FindAndReplace(target, prop, list, addLanguage) {
            var result = [];
            var source = target[prop];

            if (source) {
                source.forEach(function (id) {
                    var item = list.find(function (item) { return item.id === id });
                    if (item) {

                        if (addLanguage)
                            item.languages.push(target);

                        result.push(item);
                    }
                });
                target[prop] = result;
            }
        }
        data.languages.forEach(function (lang) {
            FindAndReplace(lang, "runtimes", data.runtimes, true);
            FindAndReplace(lang, "ides", data.ides, true);
        });
        data.projects.forEach(function (project) {
            FindAndReplace(project, "languages", data.languages);
        });
    })();

    var app = angular.module(appName, ["ngSanitize", "ui.router"]);

    function BuildController(onLoad) {
        return function ($http, $stateParams, $timeout) {
            var vm = this;
            vm.$http = $http;
            vm.$stateParams = $stateParams;
            vm.$timeout = $timeout;

            angular.extend(vm, data);
            if (onLoad)
                onLoad(vm);
        }
    }

    app.component("home", {
        templateUrl: templatesRoot + "home.html",
        controller: BuildController()
    });

    app.component("project", {
        templateUrl: templatesRoot + "project.html",
        controller: BuildController(function (vm) {
            var project = data.projects.find(function (project) { return project.id === vm.$stateParams.id });
            vm.project = project;
            if (!project.implementations) {
                project.implementations = [];

                project.languages.forEach(function (lang) {
                    var implementation = {
                        language: lang,
                        link: "https://github.com/Bigsby/HelloLanguages/tree/master/" + lang.id + "/" + project.id
                    };

                    project.implementations.push(implementation);

                    vm.$http.get("https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/" + lang.id + "/" + project.id + "/" + project.id + "." + lang.id)
                    .then(function (response) {
                        implementation.code = response.data;
                        vm.$timeout(function () { Prism.highlightElement(document.querySelector(".language-" + lang.highlight)); });
                    });
                });
            }
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

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();