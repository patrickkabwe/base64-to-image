import { bufferToImageAndWriteImageToPath, convertBase64ToBuffer, readBase64File } from './utils'

/**
 * @name converBase64ToImage
 * @description Takes a base64 string that begins with data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD// and converts it to an image.
 * @param {string} base64 Buffer to be converted to image.
 * @param {string} path Full path to write image to e.g /path/to/image.png
 * @requires fs
 *
 * @returns {void}
 */
export const converBase64ToImage = (base64: string, path: string): void => {
  try {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

    if (!base64regex.test(base64)) {
      throw new Error('Invalid base64 string')
    }
    if (!base64) {
      throw new Error('Base64 can not be empty')
    }
    if (!path) {
      throw new Error('Path can not be empty')
    }
    const base64String = readBase64File(base64)
    const buffer = convertBase64ToBuffer(base64String)
    bufferToImageAndWriteImageToPath(buffer, path)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
