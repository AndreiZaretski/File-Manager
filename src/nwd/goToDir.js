import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';

export const goTuDir = (dirPath)=> {
  try {
    let absolutePath = path.resolve(dirPath);

    process.chdir(absolutePath);
    console.log(getCurrentDir());


  } catch (err) {
    console.log(`${'\x1b[31m'}Something went wrong${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}