import readLine from 'readline';
import { osInfo } from '../os/os-info.js';
import {getCurrentDir} from '../utils/currentDir.js'
import os from 'os';
import { printCurrDirr } from '../nwd/prinListDir.js';
import { goTuDir } from '../nwd/goToDir.js';
import { goUp } from '../nwd/goUp.js';
import { readFile } from '../fs/readFile.js';
import { createNewFile } from '../fs/newFile.js';
import { removeFile } from '../fs/deleteFile.js';
import { parseStringPath } from '../utils/parsePathString.js';
import { copyMoveFile } from '../fs/copyRemoveFile.js';
import { renameFile } from '../fs/renameFile.js';
import { calculateHash } from '../hash/calculateHash.js';


export const cmd = async (username) => {
  const rl = readLine.createInterface(process.stdin, process.stdout);
  
  rl.on('line', async (input)=>{
    //console.log(`You are currently in ${process.cwd()}`);
    const args = input.split(' ');
    //console.log(args);
    switch (args[0].trim()) {
      case '.exit': rl.close(); break;
      //process.exit(0);
      
      case '': 
        console.log(getCurrentDir());
        break;

      case 'up': goUp(); break;

      case 'cd': goTuDir(args.slice(1).join(' ')); break;
      
      case 'ls': printCurrDirr(); break;

      case 'os': await osInfo(args[1]); break;

      case 'cat': readFile(args.slice(1).join(' ')); break;

      case 'add': await createNewFile(args.slice(1).join(' ')); 
        break;

      case 'rm': await removeFile(args.slice(1).join(' '));
        break;

      case 'cp': await copyMoveFile(args.slice(1).join(' '), false); break;

      case 'mv': await copyMoveFile(args.slice(1).join(' '), true); break;

      case 'rn': await renameFile(args.slice(1).join(' ')); break;

      case 'hash': await calculateHash(args.slice(1).join(' ')); break;

      case 'check': console.log(parseStringPath(args.slice(1).join(' ')));
      break;
      //case
      default: console.log('Invalid input');
    }

  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${'\x1b[35m'}${username}${'\x1b[0m'}, goodbye!`);
    });
}