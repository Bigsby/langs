"use strict";
(function () {
    SystemJS.config({
        "baseURL": "/scripts",
        "map": {
            "json": "https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js",
        },
        "paths": {
            "data": "../../../data"
        }
    });

    SystemJS.import("core/config.json!json").then(function (coreConfig) {
        SystemJS.import("app/config.json!json").then(function (appConfig) {
            SystemJS.config(coreConfig.config);
            SystemJS.config(appConfig.config);

            if (appConfig.styles)
                appConfig.styles.forEach(function (css) {
                    SystemJS.import(css);
                });

            const dataRequired = appConfig.initialData && appConfig.initialData.length;
            var data = {};

            if (appConfig.initialData)
                appConfig.initialData.forEach(function (file) {
                    SystemJS.import("data/" + file + ".json!json").then(function (dataContent) {
                        data[file] = dataContent;
                    });
                });

            SystemJS.register("data", [], function () {
                return data;
            });

            SystemJS.import("appBuilder").then(function (appBuilder) {
                const app = angular.module(coreConfig.angularAppName, coreConfig.angular.modules);
                app.value("data", data);

                if (appConfig.ga)
                    app.run(function ($window, $transitions, $location) {
                        $window.ga("create", appConfig.ga, "auto");
                        $transitions.onSuccess({}, () => {
                            $window.ga("send", "pageview", $location.path());
                        });
                    });

                window.templatePath = function (name) {
                    return "templates/" + name + ".html";
                };

                if (appBuilder.RegisterComponents && typeof appBuilder.RegisterComponents === "function")
                    appBuilder.RegisterComponents(app);

                app.config(coreConfig.angular.configComponents.concat([function ($httpProvider, $sceProvider, $stateProvider, $urlRouterProvider) {
                    $httpProvider.defaults.useXDomain = true;
                    $sceProvider.enabled(false);

                    if ($stateProvider &&
                        appBuilder.RegisterStates && typeof appBuilder.RegisterStates === "function")
                        appBuilder.RegisterStates($stateProvider);

                    if ($urlRouterProvider)
                        $urlRouterProvider.otherwise("/");
                }]));


                angular.bootstrap(document, [coreConfig.angularAppName]);
            });

        });
    });

})();