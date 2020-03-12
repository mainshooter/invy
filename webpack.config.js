const path = require('path')
const glob = require("glob");

let files = [];

let controllers = glob.sync("./controller/*.js");
let models = glob.sync("./model/*.js");
let views = glob.sync("./view/**/*.js");

for (var i = 0; i < controllers.length; i++) {
  files.push(controllers[i])
}
for (var i = 0; i < models.length; i++) {
  files.push(models[i])
}
for (var i = 0; i < views.length; i++) {
  files.push(views[i])
}
files.push('./index.js');

module.exports = {
  mode: 'development',
  entry: files,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  },
  devServer: {
    liveReload: false
  }
}
