import { readFile, readdir, stat, writeFile } from 'node:fs'
import { extname, join } from 'node:path'

var directoriesToIgnore = new Set([
  'scripts',
  'node_modules',
  'public',
  'coverage',
  '.vscode',
  '.husky',
  '.git',
  '.next',
  '.swc',
  '.babel',
])

var acceptedFileExtensions = new Set(['.js', '.jsx', '.ts', '.tsx'])

var defaultRootDirectory = './'

function removeExtraWhitespace(content) {
  return content.replaceAll(/className\s*=\s*(["'])([^"']+)\1/g, (_, quoteType, classNames) => {
    var compactedClassNames = classNames.replaceAll(/\s+/g, ' ').trim()
    return 'className=' + quoteType + compactedClassNames + quoteType
  })
}

function shouldIgnoreDirectory(directoryName) {
  return directoriesToIgnore.has(directoryName)
}

function processDirectory(directoryPath) {
  readdir(directoryPath, (error, files) => {
    if (error) {
      console.error('Error reading directory:', directoryPath, error)
      return
    }
    var _loop_1 = function (file) {
      var filePath = join(directoryPath, file)
      stat(filePath, (error_, stats) => {
        if (error_) {
          console.error('Error getting file stats:', filePath, error_)
          return
        }
        if (stats.isDirectory()) {
          if (!shouldIgnoreDirectory(file)) {
            processDirectory(filePath)
          }
        } else if (acceptedFileExtensions.has(extname(file))) {
          readFile(filePath, 'utf8', (error__, data) => {
            if (error__) {
              console.error('Error reading file:', filePath, error__)
              return
            }
            var modifiedContent = removeExtraWhitespace(data)
            if (data === modifiedContent) {
              console.log('No changes needed: ' + filePath)
            } else {
              writeFile(filePath, modifiedContent, 'utf8', (error___) => {
                if (error___) {
                  console.error('Error writing file:', filePath, error___)
                } else {
                  console.log('Modified and saved: ' + filePath)
                }
              })
            }
          })
        }
      })
    }
    for (var _index = 0, files_1 = files; _index < files_1.length; _index++) {
      var file = files_1[_index]
      _loop_1(file)
    }
  })
}

var rootDirectory = process.argv[2] || defaultRootDirectory

processDirectory(rootDirectory)
