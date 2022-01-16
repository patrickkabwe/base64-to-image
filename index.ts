import fs from 'fs'
import { Base64 } from './@types'

const manipulateUTF8String = (utf8: string): string => {
  try {
    const base64 = utf8.split(',')[1]
    return base64
  } catch (error) {
    throw new Error('Invalid base64 string')
  }
}

const readBase64File = (base64: string): string => {
  try {
    const utf8OrBase64String = base64
      ? base64
      : fs.readFileSync('base64String.txt', 'utf8')
    const base64String = manipulateUTF8String(utf8OrBase64String)
    return base64String
  } catch (error) {
    throw error
  }
}

const convertBase64ToBuffer = (base64: string): Buffer => {
  try {
    const buffer = Buffer.from(base64, 'base64')
    return buffer
  } catch (error) {
    throw error
  }
}
/**
 * @name bufferToImageAndWriteImageToPath
 * @description Takes a buffer and converts it to image and writes image to path.
 * @param {Buffer} buffer Buffer to be converted to image.
 * @param {string} path Full path to write image to e.g /path/to/image.png
 *
 * @returns {void}
 */
const bufferToImageAndWriteImageToPath = (
  buffer: Buffer,
  path: string
): void => {
  try {
    fs.writeFileSync(path, buffer)
  } catch (error) {
    throw error
  }
}

/**
 * @name converBase64ToImage
 * @description Takes a base64 string that begins with data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD// and converts it to an image.
 * @param {Base64} base64 Buffer to be converted to image.
 * @param {string} path Full path to write image to e.g /path/to/image.png
 * @requires fs
 *
 * @returns {void}
 */
export const converBase64ToImage = (base64: Base64, path: string): void => {
  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

  if (!base64regex.test(base64)) {
    throw new Error('Invalid base64 string')
  }
  if (!base64) {
    throw new Error('Base64 can not be empty')
  }
  if (!path) {
    throw new Error('Path can not be empty')
  }
  try {
    const base64 = readBase64File('')
    const buffer = convertBase64ToBuffer(base64)
    bufferToImageAndWriteImageToPath(buffer, path)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
