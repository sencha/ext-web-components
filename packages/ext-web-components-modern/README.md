## @sencha/ext-web-components

last run: Thu Nov 28 2019 10:00:45 GMT-0500 (Eastern Standard Time)

## Login to the Sencha early adopter npm repo

```sh
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha

```

## Create a JavaScript application

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
  <meta name="viewport"
    content="width=device-width,initial-scale=1,maximum-scale=10,user-scalable=yes"
  >
</head>

<script type="module"
  src="./node_modules/@sencha/ext-web-components/src/ext-toolbar.component.js">
</script>
<script type="module"
  src="./node_modules/@sencha/ext-web-components/src/ext-button.component.js">
</script>

<script>
  getNow = function() {
    document.querySelector('#updateDiv').innerText = new Date();
  }
</script>

<body>
  <ext-toolbar>
    <ext-button text="get now" shadow="true" ontap="getNow"></ext-button>
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
