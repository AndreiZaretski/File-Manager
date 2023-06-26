import { createReadStream } from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';


export const readFile = async (pathToFile) => {

  try {
    const readStream = createReadStream(path.resolve(pathToFile), {encoding: 'utf8'});
    
    readStream.on('data', chunk => {
      console.log(chunk, '\n');
    });

    readStream.on('error', (err) => {
      console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`);
      console.log(getCurrentDir());
    });

    readStream.on('end', () => {
       console.log(getCurrentDir());
    });
  } catch(err) { 
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`);
    console.log(getCurrentDir());
  }   
};