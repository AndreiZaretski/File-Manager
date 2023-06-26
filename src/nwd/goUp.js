import {getCurrentDir} from '../utils/currentDir.js';

export const goUp = () => {
  try{
    process.chdir('..');
    console.log(getCurrentDir());

  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
}