## @sencha/ext-web-components

last run: Tue Nov 19 2019 06:45:38 GMT-0500 (Eastern Standard Time)

## Test with Vanilla JavaScript

- Create a folder named ext-web-components-demo

mac
```sh
mkdir ext-web-components-demo
cd ext-web-components-demo
```

windows
```sh
md ext-web-components-demo
cd ext-web-components-demo
```

- In the ext-web-components-demo folder, create a package.json file with the following:

```sh
{
  "name": "ext-web-components-demo",
  "version": "1.0.0",
  "description": "ext-web-components-demo",
  "scripts": {
    "start": "npx http-server -o"
  },
  "devDependencies": {
    "@sencha/ext-web-components": "~7.1.0",
    "http-server": "^0.11.1"
  },
  "author": "",
  "license": "ISC",
  "repository": {}
}
```

- In the ext-web-components-demo folder, create an index.html file with the following:

```sh
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">
</head>
<script type="module">
  import "./node_modules/@sencha/ext-web-components/src/ext-toolbar.component.js";
  import "./node_modules/@sencha/ext-web-components/src/ext-button.component.js";
  window.sayHello = function() {
    let updateDiv = document.querySelector('#updateDiv');
    updateDiv.innerText = 'Say Hello!';
  }
  window.sayGoodbye = function() {
    let updateDiv = document.querySelector('#updateDiv');
    updateDiv.innerText = 'Say Goodbye!';
  }
</script>
<body>
  <ext-toolbar>
    <ext-button text="hello" shadow="true" ontap="sayHello"></ext-button>
    <ext-button text="goodbye" shadow="true" ontap="sayGoodbye"></ext-button>
    <div id='updateDiv' style="margin-left:20px;"></div>
  </ext-toolbar>
</body>
</html>
```

- Run the following in the ext-web-components-demo folder

```sh
npm install
npm start
```

A browser window at http://127.0.0.1:8080 will display




_____________________________________________________________
## Test with create-react-app

- Run the following:

```sh
npx create-react-app react-ext-web-components-demo
cd react-ext-web-components-demo
npm install @sencha/ext-elements-all --save
cp node_modules/@sencha/ext-elements-all/ext/css.all.js ./public/css.all.js
cp node_modules/@sencha/ext-elements-all/ext/ext.all.js ./public/ext.all.js
cp node_modules/@sencha/ext-elements-all/react/ReactCell.js ./public/ReactCell.js
```

- Add the following to ./public/index.html

```sh
    <script src="%PUBLIC_URL%/css.all.js"></script>
    <script src="%PUBLIC_URL%/ext.all.js"></script>
    <script src="%PUBLIC_URL%/ReactCell.js"></script>
```

- Replace ./src/App.js with:

```sh
import React from 'react';
import ExtPanel from "@sencha/ext-elements-all/react/ExtPanel";

function App() {
  return (
    <ExtPanel title="hi"></ExtPanel>
  );
}

export default App;
```

- Run the following:

```sh
npm start
```


## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new web-components CLI application

```sh
ng new ng-ext-web-components --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-ext-web-components; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-web-components": "~7.1.0",
"@webcomponents/webcomponentsjs": "^2.3.0",
```

#### Run npm install

in a terminal window at the root of your application, run the following:

```sh
npm install
```

#### Replace src/styles.css (optional)

If you want to get a look at different styling...
Open the src/styles.css file in the editor and replace the contents with the following:

```sh
:root {
    --dark-mode: false;
    --base-color: yellow !important;
    --base-highlight-color: #64b5f6;
    --base-light-color: #bbdefb;
    --base-dark-color: #1976d2;
    --base-pressed-color: #6ab8f7;
    --base-focused-color: #42a5f5;
    --base-invisible-color: rgba(33, 150, 243, 0);
    --base-foreground-color: green !important;
    --accent-color: #ff9800;
    --accent-light-color: #ffe0b2;
    --accent-dark-color: #f57c00;
    --accent-pressed-color: #ffb74d;
    --accent-invisible-color: rgba(255, 152, 0, 0);
    --accent-foreground-color: #222;
    --confirm-color: #7cb342;
    --confirm-pressed-color: #a2cc75;
    --alert-color: #c62828;
    --alert-pressed-color: #de5c5c;
    --color: blue !important;
    --reverse-color: #fff;
    --highlight-color: rgba(17, 17, 17, 0.54);
    --disabled-color: rgba(17, 17, 17, 0.38);
    --reverse-disabled-color: rgba(255, 255, 255, 0.38);
    --divider-color: #e2e2e2;
    --selected-background-color: #e0e0e0;
    --hovered-background-color: #eee;
    --header-background-color: #f5f5f5;
    --faded-color: #e1e1e1;
    --background-color: #fafafa;
    --alt-background-color: #f5f5f5;
    --reverse-background-color: #303030;
    --reverse-alt-background-color: #3a3a3a;
    --overlay-color: rgba(0, 0, 0, 0.03);
    --content-padding: 16px;
    --listitem-selected-background-color: #e0e0e0;
    --reverse-border-color: #e0e0e0;
    --reverse-alt-border-color: #e0e0e0;
}

.x-grid {
    --color: red !important;
}
```


#### Replace src/app/app.module.js

Open the src/app/app.module.js file in the editor and replace the contents with the following:

```sh
declare var Ext: any
import '@sencha/ext-web-components/ext-web-components.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following:

```sh

```

#### Run the application

Type the following in a command/terminal window:

```sh
ng serve --open --port 4200
```

a page at http://localhost:4200 opens in a browser window and the EWC application will load

#### imports in the npm package module:
##### @sencha/ext-web-components/ext-web-components.module

