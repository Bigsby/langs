function CreateLanguages(target) {
    for (var p in target)
        target[p].languages = [];
};

module.exports = function ProcessData(data) {
    CreateLanguages(data.runtimes);
    CreateLanguages(data.ides);

    function FindAndReplace(target, prop, list, addLanguage) {
        var result = [];
        var source = target[prop];

        if (source) {
            source.forEach(function (id) {
                var item = list[id];
                if (item) {

                    if (addLanguage)
                        item.languages.push(target);

                    result.push(item);
                }
            });
            target[prop] = result;
        }
    }

    data.languages.forEachValue(function (languageId, language) {
        FindAndReplace(language, "runtimes", data.runtimes, true);
        FindAndReplace(language, "ides", data.ides, true);
        FindAndReplace(language, "tags", data.tags);
    });

    data.projects.forEachValue(function (projectId, project) {
        project.isImplemented = project.type === 'steps' || (project.languages && project.languages.length);
    });
};