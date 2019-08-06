const minify = require('@node-minify/core');
const uglifyES = require('@node-minify/uglify-es');
let fs = require("fs");
const strip = require('strip-comments');
const removeEmptyLines = require("remove-blank-lines");

// var theFile = fs.readFileSync('buildext/ext.development.js').toString();
// const str = strip(theFile);
// const theFileNoBlankLines = removeEmptyLines(str);
// fs.writeFileSync('buildext/ext.development.nocomments.js', theFileNoBlankLines);

minify({
  compressor: uglifyES,
  input: 'buildext/ext.development.nocomments.js',
  output: 'buildext/ext.development.nocomments.min.js',
  callback: function(err, min) {}
});

// minify({
//   compressor: uglifyES,
//   input: 'buildext/ext.development.js',
//   output: 'buildext/ext.development.min.js',
//   callback: function(err, min) {}
// });




// gzip -c buildext/ext.development.min.js > buildext/ext.development.min.js.gz
// gzip -c buildext/ext.development.nocomments.min.js > buildext/ext.development.nocomments.min.js.gz