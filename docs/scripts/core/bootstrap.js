"use strict";
(function () {
    SystemJS.config({
        "baseURL": "/scripts",
        "map": {
            "json": "https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js",
        },
        "meta": {
            "*.json": {
                "loader": "json"
            }
        },
        "paths": {
            "data": "../../../data"
        }
    });

    SystemJS.registerDynamic("bootstrap", [
        "core/config.json",
        "app/config.json"
    ], true, function (require, exports, module) {
        const coreConfig = require("core/config.json");
        const appConfig = require("app/config.json");

        if (appConfig.styles)
            appConfig.styles.forEach(function (css) {
                SystemJS.import(css);
            });

        var appBuilderDeps = coreConfig.config.meta.appBuilder.deps;

        if (appConfig.useRouting){
            appBuilderDeps.push("angular-ui-router");
            coreConfig.angular.modules.push("ui.router");
            coreConfig.angular.configComponents.push("$stateProvider");
            coreConfig.angular.configComponents.push("$urlRouterProvider");
        }
        if (appConfig.ga)
            appBuilderDeps.push("ga");

        if (appConfig.appBuilderDeps && appConfig.appBuilderDeps.length)
            appBuilderDeps = appBuilderDeps.concat(appConfig.appBuilderDeps);

        const builderInvokerDeps = coreConfig.builderInvokerDeps;
        if (appConfig.initialData)
            appConfig.initialData.forEach(function (file) {
                const map = "data-" + file;
                coreConfig.config.map[map] = "data/" + file + ".json";
                builderInvokerDeps.push(map);
            });

        SystemJS.config(coreConfig.config);
        SystemJS.config(appConfig.config);

        SystemJS.registerDynamic("builderInvoker", builderInvokerDeps, true, function (require, exports, module) {
            const data = {};

            if (appConfig.initialData && appConfig.initialData.length) {
                appConfig.initialData.forEach(function (file) {
                    var content = require("data-" + file);
                    data[file] = content;
                });
            }

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

        SystemJS.import("builderInvoker");
    });

    SystemJS.import("bootstrap");
})();