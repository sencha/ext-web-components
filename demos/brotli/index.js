const zlib = require('zlib');

var brotli = require('brotli');
var fs = require('fs');

var s = brotli.compress(fs.readFileSync('./myfile.bin'), {
  mode: 0, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11
  lgwin: 22 // window size
});
console.log(s)