import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';

export const createNewFile = async (filename) => {
  try {
    await fs.promises.writeFile(path.resolve(process.cwd(), filename), '');
    console.log('File was created')
    console.log(getCurrentDir());
  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}