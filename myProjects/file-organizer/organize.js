const fs = require('fs')

async function createFolders(path, extensions) {
    extensions.forEach((ext) => {
        fs.promises.mkdir(`${path}/${ext}`, { recursive: true })
        console.log(`Folder with path ${path}/${ext} was created`)
    })
}

async function organizeFiles(path, files, extensions) {
    extensions.forEach((ext) => {
        for (const file of files) {
            if (file.split('.').pop().toUpperCase() === ext) {
                fs.rename(`${path}/${file}`, `${path}/${ext}/${file}`, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`${file} was moved to ${path}/${ext}`)
                    }
                })
            }
        }
    })
}

module.exports = {
    createFolders,
    organizeFiles
}