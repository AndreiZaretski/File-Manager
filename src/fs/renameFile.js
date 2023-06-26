import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';
import { parseStringPath } from '../utils/parsePathString.js';
import { checkFileExists } from '../utils/checkExistsFile.js';

export const renameFile = async (pathFile) => {
  try {
    const {source, target} = parseStringPath(pathFile);

    if (!source || !target) {
      throw new Error('Invalid arguments');
    }

    const oldNamePath = path.resolve(source);
    const dirnameFile = path.dirname(oldNamePath);

    const newNameDir = path.join(dirnameFile, target);

    const isExists = await checkFileExists(newNameDir);

    if (isExists) {
      throw new Error('File already exists');
    }

    await fs.promises.rename(oldNamePath, newNameDir);

    console.log('File was renamed');
    console.log(getCurrentDir());
  } catch (err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}