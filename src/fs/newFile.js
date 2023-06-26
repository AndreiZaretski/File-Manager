import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';
import { checkFileExists } from '../utils/checkExistsFile.js';

export const createNewFile = async (filename) => {
  try {
    const newFile = path.resolve(process.cwd(), filename);
    
    const isExists = await checkFileExists(newFile);

    if (isExists) {
      throw new Error('File already exists');
    }
    await fs.promises.writeFile(newFile, '');
    console.log('File was created')
    console.log(getCurrentDir());
  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`);
    console.log(getCurrentDir());
  }
}