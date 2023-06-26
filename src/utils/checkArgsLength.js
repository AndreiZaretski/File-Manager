export const checkArgsLength = (args) => {
  if (args.split(' ').length <2) {
    console.log(`${'\x1b[31m'}Invalid input${'\x1b[0m'}`);
    return false;
  }
  return true;
} 