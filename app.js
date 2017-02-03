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
            id: "pl",
            highlight: "perl",
            name: "Perl",
            link: "https://www.perl.org/",
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
        }
    ],
    projects: [
        {
            id: "setup",
            name: "Setup & Run",
            type: "steps",
            description: "What needs to be installed to get started on each language."
        },
        {
            id: "hello",
            name: "Hello World!",
            description: "Of course, the first project is a 'Hello, World'.",
            type: "code",
            languages: ["js", "cpp", "py", "fs", "go", "rb", "cs", "java", "pl"]
        },
        {
            id: "if",
            name: "If/Else",
            description: "Evey language has, at least, one conditional statement.",
            type: "code",
            languages: []
        },
        {
            id: "loop",
            name: "Looping",
            description: "Repeating until...",
            type: "code",
            languages: []
        },
        {
            id: "iterate",
            name: "Iterating a sequence",
            description: "Repeat for every item in a sequence.",
            type: "code",
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
    ],
    implementations: {
        setup: {
            js: [
                {
                    type: "install",
                    program: "Node.js",
                    link: "https://nodejs.org/",
                    notes: [
                        "Make sure node.exe path is in System PATH"
                    ]
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Run program",
                    command: "node «filename».js"
                }
            ],
            cpp: [
                {
                    type: "install",
                    program: "Visual C++ or Visual Studio Community/Professional/Enterprise",
                    link: "https://www.visualstudio.com/vs/cplusplus/#downloadvs",
                    alternative: "https://www.visualstudio.com/downloads/",
                    notes: [
                        "If installing Community/Professional/Enterprise, make sure to enable Features > Programming Languages > Visual C++ > Common Tools for Visual C++"
                    ]
                },
                {
                    type: "open",
                    name: "Visual Studio > Developmer Command Prompt",
                    program: "VsDevCmd.bat"
                },
                {
                    type: "command",
                    text: "Compile Code",
                    command: "cl «filename».cpp"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "«filename».exe"
                }
            ],
            py: [
                {
                    type: "install",
                    program: "Python",
                    link: "https://www.python.org/downloads/"
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Run program",
                    command: "py «filename».py"
                }
            ],
            fs: [
                {
                    type: "install",
                    program: "Visual Studio Community/Professional/Enterprise",
                    link: "https://www.visualstudio.com/downloads/",
                    notes: [
                        "Make sure to enable Features > Programming Languages > Visual F#"
                    ]
                },
                {
                    type: "open",
                    name: "Visual Studio > Developmer Command Prompt",
                    program: "VsDevCmd.bat"
                },
                {
                    type: "command",
                    text: "Compile Code",
                    command: "fsc «filename».fs"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "«filename».exe"
                }
            ],
            go: [
                {
                    type: "install",
                    program: "Go",
                    link: "https://golang.org/dl/"
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Run program",
                    command: "go run «filename».go"
                }
            ],
            rb: [
                {
                    type: "install",
                    program: "Ruby",
                    link: "https://rubyinstaller.org/"
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Run program",
                    command: "ruby «filename».rb"
                }
            ],
            cs: [
                {
                    type: "install",
                    program: "Visual Studio Community/Professional/Enterprise",
                    link: "https://www.visualstudio.com/downloads/"
                },
                {
                    type: "open",
                    name: "Visual Studio > Developmer Command Prompt",
                    program: "VsDevCmd.bat"
                },
                {
                    type: "command",
                    text: "Compile Code",
                    command: "csc «filename».cs"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "«filename».exe"
                }
            ],
            java: [
                {
                    type: "install",
                    program: "Java SE Development Kit",
                    link: "http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",
                    notes: [
                        "Make sure java.exe and javac.exe paths are in System PATH"
                    ]
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Compile Code",
                    command: "javac «filename».java"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "java «filename»"
                }
            ],
            pl: [
                {
                    type: "install",
                    program: "Pearl",
                    link: "http://dwimperl.com/windows.html",
                    alternative: "https://www.perl.org/get.html#win32"
                },
                {
                    type: "open",
                    name: "Command Prompt",
                    program: "cmd.exe"
                },
                {
                    type: "command",
                    text: "Run program",
                    command: "pearl «filename».pl"
                }
            ]
        }
    }
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
            project.isImplemented = project.type === 'steps' || (project.languages && project.languages.length);
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

                switch (project.type) {
                    case "code":
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
                        break;

                    case "steps":
                        var definitions = vm.implementations[project.id];
                        if (definitions) {
                            vm.languages.forEach(function (lang) {
                                var definition = definitions[lang.id];
                                if (definition)
                                    project.implementations.push({
                                        language: lang,
                                        steps: definition
                                    });
                            });
                        }
                        vm.$timeout(function () { Prism.highlightAll(document.querySelectorAll(".language-bash")); }, 50);
                        break;
                }
            }
            else
                vm.$timeout(function () { Prism.highlightAll(); });
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