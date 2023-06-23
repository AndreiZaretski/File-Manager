import readLine from 'readline';
import os from 'os';



export const cmd = async (username) => {
  const rl = readLine.createInterface(process.stdin, process.stdout);
  rl.on('line', (input)=>{
    console.log(`You are currently in ${process.cwd()}`);
    switch (input.trim()) {
      case '.exit': rl.close();
      //process.exit(0);
      
      case '': break;
      //case
      default: console.log('Invalid input');
    }

  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${'\x1b[35m'}${username}${'\x1b[0m'}, goodbye!`);
    })
}