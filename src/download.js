/**
 * Downloads a Blob or a File
 * @function download
 * @param {Blob|File} blob
 * @param {string} fileName
 */
export function download(blob, fileName) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.download = fileName
  a.href = url
  a.dispatchEvent(new MouseEvent('click'))
}
