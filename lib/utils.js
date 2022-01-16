"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToImageAndWriteImageToPath = exports.convertBase64ToBuffer = exports.readBase64File = void 0;
const fs_1 = __importDefault(require("fs"));
const manipulateUTF8String = (utf8) => {
    try {
        const base64 = utf8.split(',')[1];
        return base64;
    }
    catch (error) {
        throw new Error('Invalid base64 string');
    }
};
const readBase64File = (base64) => {
    try {
        const utf8OrBase64String = base64
            ? base64
            : fs_1.default.readFileSync('base64String.txt', 'utf8');
        const base64String = manipulateUTF8String(utf8OrBase64String);
        return base64String;
    }
    catch (error) {
        throw error;
    }
};
exports.readBase64File = readBase64File;
const convertBase64ToBuffer = (base64) => {
    try {
        const buffer = Buffer.from(base64, 'base64');
        return buffer;
    }
    catch (error) {
        throw error;
    }
};
exports.convertBase64ToBuffer = convertBase64ToBuffer;
const bufferToImageAndWriteImageToPath = (buffer, path) => {
    try {
        fs_1.default.writeFileSync(path, buffer);
    }
    catch (error) {
        throw error;
    }
};
exports.bufferToImageAndWriteImageToPath = bufferToImageAndWriteImageToPath;
