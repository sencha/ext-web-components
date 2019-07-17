

## Adding Sencha ExtWebComponents to a Vue CLI application

This document defines the steps needed to add Sencha ExtWebComponents to a Vue.js application generated with Vue CLI.  Vue CLI is described here: https://cli.vuejs.org/guide/

### Install the Vue CLI

more details at: https://cli.vuejs.org/guide/installation.html

To install Vue CLI, bring up a terminal or command window and use the following command:


```sh
npm install -g @vue/cli
```

### Create a Vue CLI starter application 

more details at: https://cli.vuejs.org/guide/creating-a-project.html#vue-create

To create a Vue CLI starter application, continue in the terminal or command window and 'cd' to the folder where you want to create your new application.  Then, use the following command to create your new Vue CLI application.  The 'vue create' command will ask several questions - answer them as you wish or refer to the Vue documentation noted above.

```sh
vue create ext-web-components-boilerplate-vue-cli
```

Once the 'vue create' command is finished, move to the newly created folder and run the application:

```sh
cd  ext-web-components-boilerplate-vue-cli
npm run serve
```

Browse to http://localhost:8080 in your browser.  You should see the Vue.js starter application in the browser.

### Add Sencha ExtWebComponents to your Vue CLI starter application

To Add ExtWebComponents to your newly created Vue CLI starter application, bring up the created application in your favorite editor or IDE - for example, to use Visual Studio Code, cancel the currently running sample application in the terminal or command window and type 'code .' in the terminal or command window.

```sh
code .
```

add the following to the dependencies section of package.json:

```sh
"@sencha/ext-web-components": "^7.0.0",
"@sencha/ext": "^7.0.0",
"@sencha/ext-modern": "^7.0.0",
"@sencha/ext-modern-theme-material": "^7.0.0",
"@sencha/ext-webpack-plugin": "^7.0.0",
"@webcomponents/webcomponentsjs": "^2.2.10"
```

To install the npm dependencies, run the following:

```sh
npm install
```

To configure the ext-webpack-plugin for webpack in Vue, create a file named vue.config.js at the root directory (where the package.json is), and add the following:
```sh
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'build',
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: false,
    compress: false,
    inline: true,
    stats: 'none',
  },
  outputDir: path.join(__dirname, 'build'),
  configureWebpack: {
    plugins: [
        new ExtWebpackPlugin({
            framework: 'web-components',
            toolkit: 'modern',
            emit: 'yes',
            browser: 'no',
            packages: [],
            profile: '',
            verbose: 'no',
            treeshake:'no',
            environment: 'development'
        }),
    ]
  }
}
```

Replace src/main.js with the following:

```sh
/*global Ext*/
import Vue from 'vue'
import App from './App.vue'
import '@sencha/ext-web-components/lib/ext-panel.component';

Ext.onReady(function() {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
});
```

Replace src/App.vue with the following:

```sh
<template>
    <ext-panel
        title="EWC Panel in Vue.js"
        bodyPadding="20px"
    >
        <h1>I am the ExtWebComponents Panel</h1>
    </ext-panel>
</template>
<script>
    export default {
        name: 'app',
    }
</script>
```

If you don’t want to follow the above mentioned steps, then you can consume the boilerplate code [ext-web-components-boilerplate-vue](https://github.com/sencha/ext-web-components/tree/ext-components-7.0.x/packages/ext-web-components-boilerplate-vue) and start creating your application by consuming ext-web-components directly.


------------

After completing the Sencha registry. Two major commands are required to run this project:

```sh
npm install
```

and then
```sh
npm start
```
The boilerplate application will be running on the port specified after the **npm start** is completed.
This application can be consumed as a boilerplate Vue application consuming Ext-Web-Components with Vue Routing.

# HOW TO CONSUME EXT-WEBCOMPONENTS INSIDE VUE:


### EXT-WEB-COMPONENTS-VUE
Steps to create ext-web-components-vue-boilerplate application:

- Install node js (atleast version 8.10.0), then Run **npm install -g @vue/cli**, it provides vue commands in your terminal.
Run **vue create <app-name>** in your terminal, then select  **‘Manually select features’** from **‘Please pick a preset’ options**.

- Required to select libraries create full featured app, prompted under  ‘Check the features needed for your project’ are:

 - Babel
- Router
- Run the following command : **cd <Your_app_name>**.
- To consume ext-web-components in vue, few packages required to be installed and saved using  **npm install -s <package-name1><space><package-name2>...** so on for all below packages:
```sh
		@babel/plugin-syntax-dynamic-import@7.2.0
   		@sencha/ext@7.0.0
        @sencha/ext-web-components@7.0.0
   		@sencha/ext-webpack-plugin@7.0.0
		@sencha/ext-ux@6.7.0
		@sencha/ext-exporter@6.7.0
        @sencha/ext-calendar@6.7.0
		@sencha/ext-d3@6.7.0
```

- To introduce ext-modern-theme in the project, install and save packages using **npm install -s <package-names>** and packages are:
```sh
		@sencha/ext-modern@6.7.0
   		@sencha/ext-modern-theme-material@6.7.0
   		@sencha/ext-modern-treegrid@6.7.0
  ```
-  Add the following property to scripts object in package.json file, to trigger your application from  terminal using npm start command only instead of npm run serve
		```  "start": "npm run serve"
        ```
- To configure ext-web-components web-pack in vue, create vue.config.js at root directory where the package.json is been placed, and write the following code snippet:
```sh
	   const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
       module.exports = {
       devServer: {
       contentBase: 'dist',
       hot: true,
       historyApiFallback: true,
       host: '0.0.0.0',
       port: '1962',
       disableHostCheck: false,
       compress: false,
       inline: true,
       stats: 'none',
   },
   outputDir: require('path').join(__dirname, 'build'),
   configureWebpack: {
       plugins: [
           new ExtWebpackPlugin({
               framework: 'webcomponents',
               toolkit: 'modern',
               emit: 'yes',
               browser: 'no',
               profile: '',
               verbose: 'no',
               treeshake: 'no',
               environment: 'development',
               packages: ['calendar', 'd3'],
           }),
       ],
   },
```
Add following code lines to your src/main.js file:

```sh     
import '@sencha/ext-web-components/lib/ext-panel.component';
Ext.require([
   'Ext.data.TreeStore',
]);
```

Replace Vue below instantiation method in main.js file
```sh
    new Vue({
        router,
        store,
        render: h => h(App)
        }).$mount('#app')
```               
with following code snippet:
```sh
	Ext.onReady(function() {
    new Vue({
    render: h => h(App),
    router,
    }).$mount('#app')
});
```
- Ext-web-components tags can be now inserted into template App.vue file. Here is code snippet:
```sh
    <ext-panel
        height="100%"
        shadow="true"
        bodyPadding="20px"
    >
    <h1>I am EXT Panel</h1>
    </ext-panel>
	<script>
	   export default {
         name: 'app',
        }
    </script>
```
- If rimraf isn’t installed, then run following command:
	**npm install -g rimraf**
- If dist folder already exists before starting the web server, then run commands:
  **rimraf dist &&  npm start**
     Otherwise just run command:
     **npm start**

- If you don’t want to follow the above mentioned steps, then you can consume the boilerplate code [ext-web-components-boilerplate-vue](https://github.com/sencha/ext-web-components/tree/ext-components-7.0.x/packages/ext-web-components-vue-boilerplate) and start creating your application by consuming ext-web-components directly.
