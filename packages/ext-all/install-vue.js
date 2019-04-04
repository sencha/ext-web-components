const path = require('path')
const fs = require('fs-extra')
const packageName = '@vue/cli-service'

console.log('Running install-ext-vue')

var nodeDir = path.resolve(__dirname)
var currDir = process.cwd()

var pkg = (fs.existsSync(currDir + '/package.json') && JSON.parse(fs.readFileSync(currDir + '/package.json', 'utf-8')) || {});
var d = pkg.devDependencies[packageName]

if (d != undefined) {
  var commonDir = path.resolve(nodeDir, 'common',)
  var fromDir = path.resolve(nodeDir, 'vue')
  fs.copySync(path.resolve(commonDir, 'public'), path.resolve(currDir, 'public'), { overwrite: true })
  fs.copySync(path.resolve(fromDir, 'public'), path.resolve(currDir, 'public'), { overwrite: true })
  fs.copySync(path.resolve(fromDir, 'src'), path.resolve(currDir, 'src'), { overwrite: true })
  console.log('Install completed')

  // fs.copy(path.resolve(fromDir, 'common'), path.resolve(currDir, 'public'), function (err) {
  //   if (err){
  //     console.log('An error occured while copying the folder.')
  //     return console.error(err)
  //   }
  //   fs.copy(path.resolve(fromDir, 'src'), path.resolve(currDir, 'src'), function (err) {
  //     if (err){
  //       console.log('An error occured while copying the folder.')
  //       return console.error(err)
  //     }
  //     console.log('Install completed')
  //   });
  //});
}
else {
  console.log('Install NOT completed')
}
