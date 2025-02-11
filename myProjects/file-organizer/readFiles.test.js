const { readFiles, extractFileExtensions } = require('./readFiles.js')
const { test, expect } = require('@jest/globals')

test('readFiles simple', async () => {
    const input = 'C:/Learning-Projects/myProjects/file-organizer/testOrganizeSimple'
    const actual = await readFiles(input)
    const expected = ["test1.png","test1.txt","test2.txt"]
    expect(actual).toEqual(expected)
})

test('readFiles full', async () => {
    const input = 'C:/Learning-Projects/myProjects/file-organizer/testOrganize'
    const actual = await readFiles(input)
    const expected = [  
        "test1.docx",
       "test1.fb2",
       "test1.jpeg",
       "test1.mp3",
       "test1.mp4",
       "test1.png",
       "test1.txt",
       "test1.xlsx",
       "test1.zip",
       "test2.png",
       "test2.txt",
       "test2.xlsx",
       "test3.png",
       "test3.txt",
    ]
    expect(actual).toEqual(expected)
})

test('extractFileExtensions simple', async () => {
    const input = 'C:/Learning-Projects/myProjects/file-organizer/testOrganizeSimple'
    const actual = extractFileExtensions(await readFiles(input))
    const expected = ["PNG", "TXT"]
    expect(actual).toEqual(expected)
})

test('extractFileExtensions full', async () => {
    const input = 'C:/Learning-Projects/myProjects/file-organizer/testOrganize'
    const actual = extractFileExtensions(await readFiles(input))
    const expected = [
       "DOCX",
       "FB2",
       "JPEG",
       "MP3",
       "MP4",
       "PNG",
       "TXT",
       "XLSX",
       "ZIP",
    ]
    expect(actual).toEqual(expected)
})
