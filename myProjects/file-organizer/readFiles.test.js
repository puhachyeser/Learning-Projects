const { readFiles } = require('./readFiles.js')
const { test, expect } = require('@jest/globals')

test('readFiles simple', () => {
    const input = 'C:/Learning-Projects/myProjects/file-organizer/testOrganizeSimple'
    const actual = readFiles(input)
    const expected = ["test1.png","test1.txt","test2.txt"]
    expect(actual).toEqual(expected)
})

