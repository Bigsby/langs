var data = {
    languages: [
        {
            id: "js",
            name: "JavaScript",
            link: "https://www.javascript.com/",
            runtimes: ["node"],
            ides: ["vscode"],
            current: true
        },
        {
            id: "cpp",
            name: "C++",
            link: "http://www.cplusplus.com/",
            runtimes: ["native"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "py",
            name: "Python",
            link: "https://www.python.org/",
            runtimes: ["python"],
            ides: ["vscode"],
            current: true
        },
        {
            id: "fs",
            name: "F#",
            link: "http://fsharp.org/",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "go",
            name: "Go",
            link: "https://golang.org/",
            ides: ["vscode", "eclipse"],
            current: true
        },
        {
            id: "rb",
            name: "Ruby",
            link: "https://www.ruby-lang.org/",
            runtimes: ["ruby"],
            ides: ["vscode", "rubyMine"],
            current: true
        },
        {
            id: "cs",
            name: "C#",
            link: "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "java",
            name: "Java",
            link: "https://www.java.com/",
            runtimes: ["java"],
            ides: ["vscode", "eclipse", "intelliJ", "netbeans"],
            current: true
        },
        {
            id: "rs",
            name: "Rust",
            link: "https://www.rust-lang.org/",
            current: false
        },
        {
            id: "scala",
            name: "Scala",
            link: "https://www.scala-lang.org/",
            current: false
        },
        {
            id: "hs",
            name: "Haskell",
            link: "https://www.haskell.org/",
            current: false
        }
    ],
    projects: [
        {
            id: "hello",
            name: "Hello World!",
            description: "Of course, the first project is a 'Hello, World'.",
            langs: []
        },
        {
            id: "loop",
            name: "Looping",
            description: "Repeating until...",
            langs: []
        },
        {
            id: "iterate",
            name: "Iterating a sequence",
            description: "Repeat for every item in a sequence.",
            langs: []
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

        function FindAndReplace(target, prop, list) {
            var result = [];
            var source = target[prop];

            if (source) {
                source.forEach(function (id) {
                    var item = list.find(function (item) { return item.id === id });
                    if (item) {
                        item.languages.push(target);
                        result.push(item);
                    }
                });
                target[prop] = result;
            }
        }
        data.languages.forEach(function (lang) {
            FindAndReplace(lang, "runtimes", data.runtimes);
            FindAndReplace(lang, "ides", data.ides);
        });
    })();

    var app = angular.module(appName, ["ngSanitize", "ui.router"]);

    function BuildController(onLoad) {
        return function () {
            var vm = this;
            angular.extend(vm, data);
            if (onLoad)
                onLoad(vm);
        }
    }

    app.component("home", {
        templateUrl: templatesRoot + "home.html",
        controller: BuildController()
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

            $urlRouterProvider.otherwise("/");
        }]);

    angular.bootstrap(document, [appName]);
})();