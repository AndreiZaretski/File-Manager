import readLine from 'readline';
import { osInfo } from '../os/os-info.js';
import {getCurrentDir} from '../utils/currentDir.js';
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
import { compressDecompressFile } from '../zip/compressDecompress.js';
import { checkArgsLength } from '../utils/checkArgsLength.js';


export const cmd = async (username) => {
  const rl = readLine.createInterface(process.stdin, process.stdout);
  
  rl.on('line', async (input)=>{
    
    const args = input.trim().split(' ');

    const argsForFunction = args.slice(1).join(' ').trim();
    
    switch (args[0].trim()) {
      case '.exit': rl.close();
      break;
      
      case '': console.log(getCurrentDir());
        break;

      case 'up': goUp(); 
        break;

      case 'cd': goTuDir(argsForFunction); 
        break;
      
      case 'ls': printCurrDirr(); 
        break;

      case 'os': await osInfo(argsForFunction); 
        break;
      
      case 'cat': await readFile(argsForFunction); 
        break;

      case 'add': await createNewFile(argsForFunction); 
        break;

      case 'rm': await removeFile(argsForFunction);
        break;

      case 'cp': if(checkArgsLength(argsForFunction)) { 
        await copyMoveFile(argsForFunction, false); }
        break;

      case 'mv': if(checkArgsLength(argsForFunction)) { 
        await copyMoveFile(argsForFunction, true); }
        break;

      case 'rn': if(checkArgsLength(argsForFunction)) {
        await renameFile(argsForFunction); }
        break;

      case 'hash': await calculateHash(argsForFunction); break;

      case 'check': console.log(parseStringPath(argsForFunction));
        break;

      case 'compress': if(checkArgsLength(argsForFunction)) {
        await compressDecompressFile(argsForFunction, true); }
        break;

      case 'decompress': if(checkArgsLength(argsForFunction)) {
        await compressDecompressFile(argsForFunction, false); }
        break;
      
      default: console.log(`${'\x1b[31m'}Invalid input${'\x1b[0m'}`);
    }

  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${'\x1b[35m'}${username}${'\x1b[0m'}, goodbye!`);
    });
}