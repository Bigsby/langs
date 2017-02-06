var data = {
    languages: [
        {
            id: "js",
            name: "JavaScript",
            description: "Mostly commonly used in internet web-pages and running within web browsers (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge).",
            tags: [
                "dynamic",
                "script"
            ],
            link: "https://www.javascript.com/",
            highlight: "javascript",
            runtimes: ["node", "web_browsers"],
            ides: ["npp", "vscode"],
            current: true
        },
        {
            id: "cpp",
            name: "C++",
            description: "Compiles directly to processors native machine code and, as such, is highly optimized.",
            tags: [
                "dynamic",
                "strongly_typed",
                "native"
            ],
            link: "http://www.cplusplus.com/",
            highlight: "cpp",
            runtimes: ["native"],
            ides: ["npp", "vscode", "vs"],
            current: true
        },
        {
            id: "py",
            name: "Python",
            description: "",
            tags: [
                "script",
                "specific_runtime"
            ],
            link: "https://www.python.org/",
            highlight: "python",
            runtimes: ["python"],
            ides: ["vscode"],
            current: true
        },
        {
            id: "fs",
            name: "F#",
            tags: [
                "strongly_typed",
                "il",
                "specific_runtime"
            ],
            link: "http://fsharp.org/",
            highlight: "fsharp",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "go",
            name: "Go",
            tags: [
                "script",
                "specific_runtime"
            ],
            link: "https://golang.org/",
            highlight: "go",
            ides: ["vscode", "eclipse"],
            current: true
        },
        {
            id: "rb",
            name: "Ruby",
            tags: [
                "script",
                "specific_runtime"
            ],
            link: "https://www.ruby-lang.org/",
            highlight: "ruby",
            runtimes: ["ruby"],
            ides: ["vscode", "rubyMine"],
            current: true
        },
        {
            id: "cs",
            name: "C#",
            tags: [
                "strongly_typed",
                "il",
                "specific_runtime"
            ],
            link: "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx",
            highlight: "csharp",
            runtimes: ["net"],
            ides: ["vscode", "vs"],
            current: true
        },
        {
            id: "java",
            name: "Java",
            tags: [
                "strongly_typed",
                "il",
                "specific_runtime"
            ],
            link: "https://www.java.com/",
            highlight: "java",
            runtimes: ["java"],
            ides: ["vscode", "eclipse", "intelliJ", "netbeans"],
            current: true
        },
        {
            id: "pl",
            name: "Perl",
            tags: [
                "script",
                "specific_runtime"
            ],
            link: "https://www.perl.org/",
            highlight: "perl",
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
            description: "What needs to be installed to get started on each language.",
            text: "<p>Since the computer and the, already very high-level, Operating System that is running don't know much more than machine code, the code, of each language, needs to be compiled and/or have a runtime to run it.</p><p>Here are the steps required to run a program on each of the languages.</p>"
        },
        {
            id: "hello",
            name: "Hello World!",
            description: "Of course, the first project is a 'Hello, World'.",
            text: "<p>Every tutorial of every language starts with an app that simply outputs \"Hello, World\". It serves the purposes of making sure everything (compile, runtime, etc.) is in place and, also, displaying the most simple structure of a program of a given language.</p>",
            type: "code",
            output: "Hello, World!",
            languages: ["js", "cpp", "py", "fs", "go", "rb", "cs", "java", "pl"],
            notes: {
                cpp: [
                    "<code>cout</code> is the console output stream and <code><<</code> is the operator that \"means\" write to stream."
                ]
            }
        },
        {
            id: "comments",
            name: "Commenting",
            description: "Non-processed statements.",
            text: "<p>The first thing to do after writing some code is writing non-code, i.e., comments. Most of the times to comment some code that is no longer needed.</p>",
            type: "code",
            output: "Hello, Comments!",
            languages: ["js", "cpp", "py", "fs", "go", "rb", "cs", "java", "pl"]
        },
        {
            id: "variables",
            name: "Variables",
            description: "Holding in-memory values to be (re)used.",
            text: "<p>One could always access the computer memory alocations by its number/position but it's way more practical to name them and use the name for future reference.</p>",
            type: "code",
            output: "This is the sentence.\nThis is the sentence.",
            languages: ["js", "cpp", "py", "fs", "go", "rb", "cs", "java", "pl"],
            extraCode: {
                js: {
                    dynamic: {
                        text: "Since <b>JavaScript</b> is a dynamic language, as oposed to strongly-typed, <code>var x = ...</code> doesn't enforce a type on the variable. Because of that, this code is totally valid and has the exact same output."
                    }
                }
            }
        },
        {
            id: "binary_operators",
            name: "Binary Operators",
            description: "Comparing stuff.",
            text: "",
            type: "code",
            languages: [],
            notes: {
                js: [
                    ""
                ]
            }
        },
        {
            id: "if",
            name: "If/Else",
            description: "Evey language has, at least, one conditional statement.",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "loop",
            name: "Looping",
            description: "Repeating until...or not.",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "iterate",
            name: "Iterating a sequence",
            description: "Repeat for every item in a sequence.",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "dry",
            name: "Don't Repeat Yourself",
            description: "Wrapping functionality in a code block that can be reused.",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "scope",
            name: "Access scope",
            description: "Where and when are things accessible.",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "file_read",
            name: "Read from File",
            description: "Reading from the File System",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "file_write",
            name: "Write to File",
            description: "Writing to the File System",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "web_call",
            name: "Web Call",
            description: "Making an HTTP request",
            text: "",
            type: "code",
            languages: []
        },
        {
            id: "gui",
            name: "GUI",
            description: "Creating a Graphical User Interface",
            text: "",
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
            id: "web_browsers",
            name: "Web-Browsers"
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
    tags: {
        dynamic: "As opposed to strongly typed, i.e., any variable can \"change\" type and/or be used as another type.",
        strongly_typed: "Enforces typed variables, at compile time or at runtime, so that a variable is not mis-used resulting in runtime inconsistencies.",
        script: "The code is parsed at runtime.",
        native: "The code is compiled to machine (processor) native code.",
        il: "The code is compiled to an Intermediate Language read by the runtime.",
        specific_runtime: "Requires a specific runtime (a program that runs the code) to be install on the computer"
    },
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
                    command: "node filename.js"
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
                    text: "Compile code",
                    command: "cl filename.cpp"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "filename.exe"
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
                    command: "py filename.py"
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
                    text: "Compile code",
                    command: "fsc filename.fs"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "filename.exe"
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
                    command: "go run filename.go"
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
                    command: "ruby filename.rb"
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
                    text: "Compile code",
                    command: "csc filename.cs"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "filename.exe"
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
                    text: "Compile code",
                    command: "javac filename.java"
                },
                {
                    type: "command",
                    text: "Run compiled program",
                    command: "java filename"
                }
            ],
            pl: [
                {
                    type: "install",
                    program: "Perl",
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
                    command: "perl filename.pl"
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
                                link: "https://github.com/Bigsby/HelloLanguages/tree/master/" + lang.id
                            };

                            project.implementations.push(implementation);

                            vm.$http.get("https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/" + lang.id + "/" + project.id + "." + lang.id)
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
                        //vm.$timeout(function () { Prism.highlightAll(document.querySelectorAll(".language-bash")); }, 50);
                        break;
                }
            }
            else
                vm.$timeout(function () { Prism.highlightAll(); });

            vm.$timeout(function () { Prism.highlightAll(document.querySelectorAll(".language-bash")); }, 50);
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