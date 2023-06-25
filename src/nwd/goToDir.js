import fs from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';

export const goTuDir = (dirPath)=> {
  try {
    const driveLetterRegex = /^[A-Z]:$/i;
      if (dirPath.length === 2 && driveLetterRegex.test(dirPath)) {
      dirPath += '\\';}
    const absolutePath = path.resolve(dirPath);

    process.chdir(absolutePath);
    console.log(getCurrentDir());


  } catch (err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}