import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import {getCurrentDir} from '../utils/currentDir.js';
import { parseStringPath } from '../utils/parsePathString.js';
import { checkFileExists } from '../utils/checkExistsFile.js';

export const compressDecompressFile = async (str, isCompress) => {
  try {
    const {source, target} = parseStringPath(str);
  
    const sourcePath = path.resolve(source);
    const destinationPath = path.resolve(target);
  
    const exitFile = isCompress ? destinationPath +'.br' : destinationPath;

    const isExistsInput = await checkFileExists(sourcePath);

    if (!isExistsInput) {
      throw new Error(`File ${sourcePath} not found`);
    }

    const isExists = await checkFileExists(exitFile);

      if (isExists) {
      throw new Error(`File ${exitFile} already exists `);
    }
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(exitFile);
    const brotli = isCompress ? zlib.createBrotliCompress(): zlib.createBrotliDecompress();
      
    await pipeline(readStream, brotli, writeStream);
    const comoressOrDecommpress = isCompress ? 'compressed': 'decompressed';
    console.log(`File was ${comoressOrDecommpress}`);
    console.log(getCurrentDir());
  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}

