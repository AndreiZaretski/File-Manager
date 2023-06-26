import os from 'os';
import { cmd } from './checkCmd/cmd.js';
import {getCurrentDir} from './utils/currentDir.js';

const checkUser = () =>{
  const args = process.argv.slice(2);
  if(args[0].includes('--username=') && args.length ===1 
  && args[0].split('=')[0]==='--username'&& args[0].split('=')[1].trim()) {
    return args[0].split('=')[1].trim();
  }
  return null;
}

const start = async ()=>{
  const username = checkUser();
  if(username) {
    console.log(`Welcome to the File Manager, ${'\x1b[34m'}${username}${'\x1b[0m'}!`);
    process.chdir(os.homedir());
    console.log(getCurrentDir());
    
    await cmd(username);
  } else {
    console.log(`Please, input correct command, formats:${'\x1b[34m'} "npm run start -- --username=your_name"${'\x1b[0m'}`)
  }
}

await start();