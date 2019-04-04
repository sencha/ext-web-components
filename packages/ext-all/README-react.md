## Getting Started with EWC and React.js

  Note:  This approach does not utilize @sencha/ext-webpack-plugin

  1 - run create-react-app

      npx create-react-app ewc-react-app
      cd ewc-react-app

  2 - add to package.json:

      -  in 'dependencies' section: 

    "@sencha/ext-components": "~7.0.0",
    "@sencha/ext-all": "~7.0.0",

      - in 'scripts' section:

    "install": "node ./node_modules/@sencha/ext-all/install-react.js",

  3 - run 'npm install' (for lerna: run 'npm install' at the root)

  4 - run 'npm start'
