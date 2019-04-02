## Getting Started with EWC and Vue.js

  Note:  This approach does not utilize @sencha/ext-webpack-plugin

  1 - run vue create

      npx vue create ewc-vue-app
        Manually select features
          de-select Linter / Formatter
      cd ewc-vue-app


  2 - add to package.json:

    - in 'scripts' section:

    "install": "node ./node_modules/@sencha/ext-all/install-vue.js",

    -  in 'dependencies' section: 

    "@sencha/ext-components": "~7.0.0",
    "@sencha/ext-all": "~7.0.0",


  3 - run 'npm install' (for lerna: run 'npm install' at the root)


  4 - run 'npm run serve'
