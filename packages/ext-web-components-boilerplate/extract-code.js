const fs = require('fs');
const path = require('path');
const examples = path.join(__dirname, 'src', 'view');
const mkdirp = require('mkdirp').sync;
let result = {};

function extractAll(dir) {
    const files = fs.readdirSync(dir);
    const parts = dir.split(path.sep);

    const example = parts[parts.length - 1];
    //const exampleCap = example.charAt(0).toUpperCase() + example.slice(1)

    for (let file of files) {
        const fullPath = path.join(dir, file);

        if (fs.lstatSync(fullPath).isDirectory()) {
            extractAll(fullPath);
        }
        else
        if (file.slice(-3) === '.js') {
            try {
                extractFrom(example, file, fullPath);
            } catch (e) {
                console.log(`Error extracting code from ${file}`, e);
            }
        }
        else
        if (file.slice(-5) === '.html') {
            try {
                extractFrom(example, file, fullPath);
            } catch (e) {
                console.log(`Error extracting code from ${file}`, e);
            }
        }
        else
        if (file.slice(-4) === '.css') {
            try {
                extractFrom(example, file, fullPath);
            } catch (e) {
                console.log(`Error extracting code from ${file}`, e);
            }
        }
        else
        if (file.slice(-5) === '.scss') {
            try {
                extractFrom(example, file, fullPath);
            } catch (e) {
                console.log(`Error extracting code from ${file}`, e);
            }
        }
        else {
            console.log(fullPath + '' + file);
        }
    }
}

function extractFrom(example, file, fullPath) {
    //  var fileLower = file.toLowerCase()
    if (!fs.existsSync(fullPath)) return;

    const content = fs.readFileSync(path.join(fullPath), 'utf8');
    if (result[example] == undefined) {
        result[example] = {};
    }
    result[example][file] = content;
}

function run() {
    var outputDir = path.join(__dirname, 'build', 'resources');
    extractAll(examples);
    mkdirp(outputDir);
    fs.writeFileSync(path.join(outputDir, 'code.js'), `window._code = ${JSON.stringify(result, null, '\t')}`, 'utf8');

    var chalk = require('chalk');
    var prefix = '';
    var platform = require('os').platform();
    if (platform == 'darwin') {prefix = 'ℹ ｢ext｣:';}
    else {prefix = 'i [ext]:';}
    var val = `${chalk.green(prefix)}`;

    outputDir = outputDir.replace(process.cwd(), '').trim();
    console.log(val + ' Writing code.js to ' + outputDir);
}

run();
