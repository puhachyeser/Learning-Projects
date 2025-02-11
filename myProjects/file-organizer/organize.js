const fs = require('fs')

async function createFolders(path, extensions) {
    extensions.forEach((ext) => {
        fs.promises.mkdir(`${path}/${ext}`)
        console.log(`Folder with path ${path}/${ext} was created`)
    })
}

module.exports = {
    createFolders
}