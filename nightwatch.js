const path = require('path')
const http = require('http')
const handler = require('serve-handler')
const Nightwatch = require('nightwatch')
const settings = require('./nightwatch.conf')
const { rollup } = require('rollup')

const server = http.createServer(async (request, response) => {
  if (request.url === '/download.umd.js') {
    const bundle = await rollup({
      input: 'src/download.js'
    })
    const { output: [{ code }] } = await bundle.generate({
      format: 'umd',
      name: 'downloader'
    })
    return response.end(code)
  }
  return handler(request, response, {
    public: path.join('nightwatch/tests')
  })
})

server.listen(process.env.NIGHTWATCH_PORT, () => {
  console.log('Running at http://localhost:5000')

  // read the CLI arguments
  Nightwatch.cli(async function (argv) {
    argv._source = argv._.slice(0)

    const runner = Nightwatch.CliRunner(argv)
    await runner.setup(settings).startWebDriver()

    try {
      await runner.runTests()
    } catch (err) {
      console.error('An error occurred:', err)
    }

    await runner.stopWebDriver()

    server.close()
  })
})
