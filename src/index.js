import os from 'os';
import { cmd } from './checkCmd/cmd.js';
import {getCurrentDir} from './utils/currentDir.js';
import { checkUser } from './utils/checkUserName.js';

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