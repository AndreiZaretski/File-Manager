export const getCurrentDir = ()=> {
  return `You are currently in ${'\x1b[36m'}${process.cwd()}${'\x1b[0m'}`
}