import fs from 'fs'

const manipulateUTF8String = (utf8: string): string => {
  try {
    const base64 = utf8.split(',')[1]
    return base64
  } catch (error) {
    throw new Error('Invalid base64 string')
  }
}

export const readBase64File = (base64: string): string => {
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

export const convertBase64ToBuffer = (base64: string): Buffer => {
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

export const bufferToImageAndWriteImageToPath = (
  buffer: Buffer,
  path: string
): void => {
  try {
    fs.writeFileSync(path, buffer)
  } catch (error) {
    throw error
  }
}
