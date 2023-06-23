import readLine from 'readline';
import { osInfo } from '../os/os-info.js';
import {getCurrentDir} from '../utils/currentDir.js'
import os from 'os';



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

      case 'os': await osInfo(args[1]); break;
      //case
      default: console.log('Invalid input');
    }

  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${'\x1b[35m'}${username}${'\x1b[0m'}, goodbye!`);
    });
}