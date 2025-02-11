const fs = require('fs')

async function readFiles(path) {
    return fs.promises.readdir(path)
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