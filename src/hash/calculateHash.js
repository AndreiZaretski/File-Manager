import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import {getCurrentDir} from '../utils/currentDir.js';

export const calculateHash = async (pathToFile) => {

  const hash = createHash('sha256');

  try {
    const absolutePath = path.resolve(pathToFile);

    const stream = createReadStream(absolutePath);

    stream.setEncoding('utf8');

    stream.on('data', (chunk) => {
      hash.update(chunk);

    });

    stream.on('end', () => {
      console.log(hash.digest('hex'));
      console.log(getCurrentDir());
    });

    stream.on('error', (err) => {
      console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    });
  } catch (err) {
    console.log(`${'\x1b[31m'}Operation failed${'\x1b[0m'}`, err.message);
    console.log(getCurrentDir());
  }
};