const fs = require('fs');
const {
    promisify
} = require("util");
const path = require("path");

let readdir = promisify(fs.readdir);
let deleteFile = promisify(fs.unlink);


async function deleteFilesWithExt(dirPath, ext) {
    let filesCount = 0;

    async function traverse(dirPath, ext) {
        if (dirPath.endsWith(ext)) {
            // deleteFile(dirPath);
            let file = dirPath.split("\\").at(-1)
                ++filesCount;
            console.log(`Count:${filesCount}. Successfully Deleted ${file}`)
            return;
        }


        if (fs.statSync(dirPath).isDirectory()) {
            let filesArr = await readdir(dirPath);

            filesArr.forEach(file => {
                let newPath = path.join(dirPath, file);
                traverse(newPath, ext)
            })
        }
    }

    await traverse(dirPath, ext)

}

module.exports = deleteFilesWithExt