const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "./../files/");

fs.readdir(folder, (err, files) => {
    const folderItems = [];
    const fileItems = [];

    files.forEach(file => {

        const fileStat = fs.statSync(path.join(folder, file));

        if (fileStat.isDirectory())
            folderItems.push(file);

        if (fileStat.isFile())
            fileItems.push({
                "name": file,
                "size": fileStat.size
            });


    });
    folderItems.forEach(folderItem => console.log("/" + folderItem));

    fileItems.forEach(fileItem => console.log(fileItem.name + "," + fileItem.size + "B"));
});