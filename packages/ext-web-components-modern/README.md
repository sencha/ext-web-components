## @sencha/ext-web-components-modern

last run: Thu Dec 12 2019 07:26:50 GMT-0500 (Eastern Standard Time)

## Login to the Sencha early adopter npm repo

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
  "version": "1.0.0",
  "description": "ext-web-components-modern-demo",
  "scripts": {
    "start": "npx http-server -o"
  },
  "devDependencies": {
    "@sencha/ext-web-components-modern": "~7.1.0",
    "http-server": "^0.12.0"
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
  <meta name="viewport"
    content="width=device-width,initial-scale=1,maximum-scale=10,user-scalable=yes"
  >
</head>

<script type="module"
  src="./node_modules/@sencha/ext-web-components-modern/src/ext-toolbar.component.js">
</script>
<script type="module"
  src="./node_modules/@sencha/ext-web-components-modern/src/ext-button.component.js">
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

- Run the following in the ext-web-components-modern-demo folder

```sh
npm install
npm start
```

A browser window at http://127.0.0.1:8080 will display
