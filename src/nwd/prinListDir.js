import fs from 'fs';
import {getCurrentDir} from '../utils/currentDir.js';


export const printCurrDirr = async ()=> {
  try {
    const currentDir = process.cwd();
    const dirContent = await fs.promises.readdir(currentDir, { withFileTypes: true });

    const dirArray = [];
    const fileArray = [];

    for(let elem of dirContent) {
       if(elem.isDirectory()) {
        dirArray.push({Name: elem.name, Type: 'directory'});
       }
       if(elem.isFile()) {
        fileArray.push({Name: elem.name, Type: 'file'});
       }
    }

    dirArray.sort((a, b)=>a.Name.localeCompare(b.Name));
    fileArray.sort((a, b)=>a.Name.localeCompare(b.Name));


    console.table([...dirArray, ...fileArray]);

    console.log(getCurrentDir());
  } catch(err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`);
    console.log(getCurrentDir());
  }
}