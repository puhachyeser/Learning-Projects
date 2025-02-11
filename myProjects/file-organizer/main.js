// const { crawlPage }  = require('./crawl.js')
const { readFiles }  = require('./readFiles.js')
const path = require('path')
// const fs = require('fs')

async function main() {
    if (process.argv.length < 3) {
        console.log("No path provided")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("Too many arguments")
        process.exit(1)
    }
    const inputPath = process.argv[2]

    console.log(`Starting organize of files in ${inputPath}`)
    console.log(readFiles(path.normalize(inputPath)))
}

main()