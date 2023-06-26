export const checkUser = () =>{
  const args = process.argv.slice(2);
  if(args[0].includes('--username=') && args.length ===1 
  && args[0].split('=')[0]==='--username'&& args[0].split('=')[1].trim()) {
    return args[0].split('=')[1].trim();
  }
  return null;
}