var data = {
    languages: [
        {
            id: "js",
            name: "JavaScript",
            link: "https://www.javascript.com/",
            current: true
        },
        {
            id: "cpp",
            name: "C++",
            link: "http://www.cplusplus.com/",
            current: true
        },
        {
            id: "py",
            name: "Python",
            link: "https://www.python.org/",
            current: true
        },
        {
            id: "fs",
            name: "F#",
            link: "http://fsharp.org/",
            current: true
        },
        {
            id: "go",
            name: "Go",
            link: "https://golang.org/",
            current: true
        },
        {
            id: "rb",
            name: "Ruby",
            link: "https://www.ruby-lang.org/",
            current: true
        },
        {
            id: "cs",
            name: "C#",
            link: "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx",
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
            langs:[]
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
    ]
};

(function () {
    var appName = "hLangs";
    var templatesRoot = "templates/";

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