module.exports = function (stateProvider) {
    stateProvider.state({
        name: "home",
        url: "/",
        component: "home"
    });

    stateProvider.state({
        name: "project",
        url: "/project/:id",
        component: "project"
    });

    stateProvider.state({
        name: "language",
        url: "/language/:id",
        component: "language"
    });

    stateProvider.state({
        name: "compare",
        url: "/compare/:first/:second/:project",
        component: "compare",
        params: {
            first: null,
            second: null,
            project: null
        }
    });
}