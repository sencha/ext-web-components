## Getting started for @sencha/ext-web-components-modern

### Login to the Sencha npm repo

* Note, you must be signed into the Sencha npm registry to access packages.

production:

```sh
npm login --registry=https://npm.sencha.com/ --scope=@sencha
```

early adopter:

```sh
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

## Create a JavaScript application

- Create a folder named ext-web-components-modern-demo

mac
```sh
mkdir ext-web-components-modern-demo
cd ext-web-components-modern-demo
```

windows
```sh
md ext-web-components-modern-demo
cd ext-web-components-modern-demo
```

- In the ext-web-components-modern-demo folder, create a package.json file with the following:

```sh
{
  "name": "ext-web-components-modern-demo",
  "version": "7.2.0",
  "description": "ext-web-components-modern-demo",
  "scripts": {
    "start": "npx servor . index.html 8080 --reload --browse"
  },
  "devDependencies": {
    "@sencha/ext-web-components-modern": "~7.2.0",
    "@sencha/ext-modern-enterprise": "~7.2.0",
    "@sencha/ext-modern-material": "~7.2.0",
    "servor": "~3.1.0"
  },
  "author": "",
  "license": "ISC",
  "repository": {}
}
```

- In the ext-web-components-modern-demo folder, create an index.html file with the following:

```sh
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=10,user-scalable=yes">
</head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">

<script type="module" src="./node_modules/@sencha/ext-modern-enterprise/ext.modern.enterprise.js"></script>
<script type="module" src="./node_modules/@sencha/ext-modern-material/ext.modern.material.js"></script>
<script type="module" src="./node_modules/@sencha/ext-web-components-modern/ext-web-components-modern.js"></script>

<script>
  getNow = function() {
    document.querySelector('#updateDiv').innerText = new Date();
  }
</script>

<body>
  <ext-toolbar border="1">

    <ext-button text="get now" border="1" ontap="getNow"></ext-button>
    <div id='updateDiv' style="margin-left:20px;"></div>
  </ext-toolbar>
</body>
</html>
```

- Run the following in the ext-web-components-modern-demo folder

```sh
npm install
npm start
```

A browser window at http://127.0.0.1:8080 will display
