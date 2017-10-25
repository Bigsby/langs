import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const folder = path.join(__dirname, "./../files/");

fs.readdir(folder, (err, files) => {
    const folderItems: string[] = [];
    const fileItems: any[] = [];

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