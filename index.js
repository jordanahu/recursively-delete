let deleteFilesWithExt = require("./deleteFilesWithExt");
const path = require("path");
let dirPath = path.join(__dirname, "example");




try {
    deleteFilesWithExt(dirPath, "txt")
} catch (err) {
    console.log(err)
}
