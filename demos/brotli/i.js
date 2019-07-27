const zlib = require('zlib');
const fs = require('fs');

const filename = 'ext.production.js';

async function compressFile1() {
  return new Promise((resolve, reject) => {
    const compress = zlib.createBrotliCompress();
    const input = fs.createReadStream(filename);
    const output = fs.createWriteStream(filename + '.br');

    input.pipe(compress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', ex => {
      reject(ex);
    });
  });
}

async function uncompressFile1() {
  return new Promise((resolve, reject) => {
    const decompress = zlib.createBrotliDecompress();
    const input = fs.createReadStream(filename + '.br');
    const output = fs.createWriteStream(filename + '.br.txt');

    input.pipe(decompress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', ex => {
      reject(ex);
    });
  });
}

(async () => {
  console.log('start compress');
  await compressFile1();
  console.log('start uncompress');
  await uncompressFile1();
  console.log('done');
})();

setTimeout(() => {}, 5000);