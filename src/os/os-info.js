import os from 'os';
import {getCurrentDir} from '../utils/currentDir.js'

export const osInfo = async (input) => {
  try{
    const arg = input.split(' ')[0].trim();
    switch (arg) {
    case '--EOL': console.log(JSON.stringify(os.EOL)); 
      console.log(getCurrentDir()); 
      break;
    case '--cpus': console.log(`Overall amount of CPUS ${'\x1b[31m'}${os.cpus().length}${'\x1b[0m'}`);
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

    default: console.log('\x1b[31m'+'Invalid input.'+'\x1b[0m');
      console.log(getCurrentDir());
    }
  } catch (err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`);
    console.log(getCurrentDir());
  }
}