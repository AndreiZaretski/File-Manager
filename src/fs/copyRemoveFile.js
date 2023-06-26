import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { parseStringPath } from '../utils/parsePathString.js';
import {getCurrentDir} from '../utils/currentDir.js';
import { checkFileExists } from '../utils/checkExistsFile.js';


export const copyMoveFile = async (str, deleteSource) => {
  try {
    const {source, target} = parseStringPath(str);

    if (!source || !target) {
      throw new Error('Invalid arguments');
    }

  //console.log(source, target);

    const sourcePath = path.resolve(source);
    const fileName = path.basename(sourcePath);
    const targetDir = path.resolve(target);
    const targetPath = path.join(targetDir, fileName);

    const isExists = await checkFileExists(targetPath);

    if (isExists) {
      throw new Error('File already exists');
    }

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(targetPath);

  const moveOrCopy = copeMoveWord(deleteSource)

  

    await pipeline(readStream, writeStream);
    console.log(`File ${sourcePath} was ${moveOrCopy} in ${targetPath}`);
    console.log(getCurrentDir());
    
    if (deleteSource) {
      await fs.promises.unlink(sourcePath);
    }
    } catch (err) {
      console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
      console.log(getCurrentDir());
    }
}

const copeMoveWord = (flag) => {
  return flag ? 'move': 'copy';
}