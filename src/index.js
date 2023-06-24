import os from 'os';
import { cmd } from './checkCmd/cmd.js';
import {getCurrentDir} from './utils/currentDir.js';
import path from 'path';

const checkUser = () =>{
  const args = process.argv.slice(2);
  if(args[0].includes('--username=') && args.length ===1 
  && args[0].split('=')[0]==='--username'&& args[0].split('=')[1].trim()) {
    return args[0].split('=')[1].trim();
  }
  return null
  //return 'Username is equal to value that was passed on application start in --username CLI argument'
}

const start = async ()=>{
  const username = checkUser();
  //console.log(!!username, '\x1b[46m'+username+'\x1b[0m')
  if(username) {
    console.log(`Welcome to the File Manager, ${'\x1b[34m'}${username}${'\x1b[0m'}!`);
    //console.log('1', path.parse(process.cwd()).root);
    process.chdir(os.homedir());
    //console.log('2', path.parse(process.cwd()).root)
    console.log(getCurrentDir());
    
    //console.log('why is work?')
    await cmd(username);
  } else {
    console.log(`Please, input correct command, formats:${'\x1b[34m'} "npm run start -- --username=your_name"${'\x1b[0m'}`)
  }
}

await start();