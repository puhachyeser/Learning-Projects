const fs = require('fs')

function readFiles(path) {
    return fs.readdirSync(path)
}

module.exports = {
    readFiles,
}