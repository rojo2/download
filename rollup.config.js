export default {
  input: 'src/download.js',
  output: [
    {
      format: 'esm',
      sourcemap: true,
      file: 'dist/download.esm.js'
    },
    {
      format: 'cjs',
      sourcemap: true,
      file: 'dist/download.js'
    }
  ]
}
