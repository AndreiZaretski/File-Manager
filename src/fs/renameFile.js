import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';
import { parseStringPath } from '../utils/parsePathString.js';

export const renameFile = async (pathFile) => {
  try {
    const {source, target} = parseStringPath(pathFile);

    const oldNamePath = path.resolve(source);
    const dirnameFile = path.dirname(oldNamePath);

    console.log(dirnameFile);
    const newNameDir = path.join(dirnameFile, target);

    await fs.promises.rename(oldNamePath, newNameDir);

    console.log('File was renamed');
    console.log(getCurrentDir());
  } catch (err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}