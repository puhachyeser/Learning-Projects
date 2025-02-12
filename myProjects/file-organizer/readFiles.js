const fs = require('fs')

async function readFiles(path) {
    const files = []
    const dirContent = await fs.promises.readdir(path)
    for (const content of dirContent) {
        if (fs.statSync(`${path}/${content}`).isFile()) {
            files.push(content)
        }
    }
    return files
}

function extractFileExtensions(files) {
    const extensionsArr = new Set()
    for (const file of files) {
        extensionsArr.add(file.split('.').pop().toUpperCase())
    }
    return [...extensionsArr]
}

module.exports = {
    readFiles,
    extractFileExtensions
}