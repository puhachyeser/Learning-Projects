const { readFiles, extractFileExtensions }  = require('./readFiles.js')
const { createFolders, organizeFiles }  = require('./organize.js')
const path = require('path')

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

    console.log(`Starting organize files in ${inputPath}`)
    const files = await readFiles(path.normalize(inputPath))
    const filesExtensions = extractFileExtensions(files)
    await createFolders(inputPath, filesExtensions)
    await organizeFiles(inputPath, files, filesExtensions)
}

main()