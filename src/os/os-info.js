import os from 'os';
import {getCurrentDir} from '../utils/currentDir.js'

export const osInfo = async (input) => {
  try{
    switch (input.trim()) {
    case '--EOL': console.log(JSON.stringify(os.EOL)); 
      console.log(getCurrentDir()); 
      break;
    case '--cpus': console.log(`Overall amount of CPUS ${os.cpus().length}`);
      console.table(os.cpus()
        .map((proc)=> ({Model: proc.model, 'Clock rate': `${proc.speed/1000} GHz`})));
      console.log(getCurrentDir());  
    break;

    case '--homedir': console.log(os.homedir()); 
      console.log(getCurrentDir()); 
      break;

    case '--username': console.log(os.userInfo().username);
      console.log(getCurrentDir()); 
      break;

    case '--architecture': 
      console.log(os.arch());
      console.log(getCurrentDir());
      break;

    default: console.log('\x1b[31m'+'Invalid input. Please enter a command like os --arg'+'\x1b[0m');
      console.log(getCurrentDir());
    }
  } catch (err) {
    console.log(`${'\x1b[31m'}Something went wrong${'\x1b[0m'}`);
    console.log(getCurrentDir());
  }
}