import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';

export const removeFile = async (pathToFile) => {
  try {
    await fs.promises.unlink(path.resolve(pathToFile));
    console.log('File was deleted')
    console.log(getCurrentDir());
  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}