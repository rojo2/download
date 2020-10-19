const assert = require('assert')
const path = require('path')
const fs = require('fs')

describe('Download', () => {
  test('Verify that it downloads a Blob', (browser) => {
    browser
      .url('http://localhost:5000/download.html')
      .waitForElementVisible('body')
      .pause(1000)
      .end(() => {
        const filePath = path.join(process.env.NIGHTWATCH_DOWNLOADS, 'file.txt')
        const content = fs.readFileSync(filePath, 'utf-8')
        assert(content === 'Hello, World!')
      })
  })
})
