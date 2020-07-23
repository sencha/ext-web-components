# ExtWebComponents
## [About ExtWebComponents](https://www.sencha.com/products/extangular)
ExtWebComponents is a comprehensive UI component library containing over 140+ pre-built UI components that are designed to work seamlessly with a framework of choice or a framework-agnostic development methodology. ExtWebComponents components are pre-built and pre-tested and work seamlessly across browsers and platforms. Built on the web components technology, the suite of enterprise-grade components consist of Data Grids, Pivot Grids, Trees, Charts, D3 Visualizations, Forms, Calendars, Buttons, Menus and many more. With the ExtWebComponents, you’ll never have to go out looking for another missing component or functionality. 

## ExtWebComponents 30-day Free Trial
The limited 30-day free trial offers full access to the ExtWebComponents UI library and tools. Try it out and see why it’s the most comprehensive component suite out there!  

## Installation and Usage
This npm package contains the needed files to add the @sencha/ext-web-components-modern package to a web-components application

### Adding ExtWebComponents to an existing app
* Create the web application directory
``` 
mkdir ext-web-components-modern-demo
cd ext-web-components-modern-demo
```
* In the project directory, create a `package.json` with the following contents:
```
{
  "name": "ext-web-components-modern-demo",
  "version": "7.2.0",
  "description": "ext-web-components-modern-demo",
  "scripts": {
    "start": "npx servor . index.html 8080 --reload --browse"
  },
  "devDependencies": {
    "@sencha/ext-web-components-modern": "~7.2.0",
    "@sencha/ext-modern-runtime": "~7.2.0",
    "servor": "~3.2.0"
  },
  "author": "",
  "license": "ISC",
  "repository": {}
}
```
 * Create an `index.html` file with the following contents:
 ```
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=10,user-scalable=yes">
</head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">

<script src="./node_modules/@sencha/ext-modern-runtime/modern.engine.enterprise.js"></script>
<link href="./node_modules/@sencha/ext-modern-runtime/material/material-all.css" rel="stylesheet" type="text/css"></link>
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
 
#### Install the packages 
``` 
npm install 
```

#### Run the dev build
```
npm start
```
 
## Explore our detailed Getting Started Guides to use ExtWebComponents (EWC) in other popular frameworks.
* [EWC with React](https://docs.sencha.com/extreact/7.2.0/guides/getting_started/getting_started.html)  	
* [EWC with Angular](https://docs.sencha.com/extangular/7.2.0/guides/getting_started/getting_started.html)   	
* [EWC with Vue](https://docs.sencha.com/extwebcomponents/7.2.0/guides/getting_started/getting_started_vue.html)                                
 
## Interested in trying out the additional tools included in your trial?
Fill out the [zip trial form](https://sencha.com/products/extwebcomponents/evaluate/) to get the zip downloads of add-on premium components: 
- D3 Adapter
- Pivot Grid
- Calendar
- Exporter 

Other design tools: 
- Themer
- Stencils
- Test
 
## EWC Trial
The ExtWebComponents trial version is valid for 30-days. If you need any help with the product trial [contact us](https://www.sencha.com/company/contact/). Ready to use the product for your commercial project? Check out the [product pricing](https://www.sencha.com/store/extwebcomponents) and licensing details. 

## Guides and Helpful Resources
Check out the documentation and our [resource center](https://www.sencha.com/resources/) to get quick access to examples, webinars, whitepapers and more.  

* [Getting Started Guides](https://docs.sencha.com/extwebcomponents/7.2.0/guides/getting_started/getting_started_options.html)
* [Sample Apps with ExtWebComponents](https://examples.sencha.com/ExtWebComponents/7.2.0/)
* [Building WebComponents](https://docs.sencha.com/extwebcomponents/7.2.0/guides/application_architecture/components.html)
* [Learn about the Data Grid Features](https://www.sencha.com/grid)

### Additional Resources
* Official Website: https://www.sencha.com/products/extwebcomponents/
* Documentation: https://docs.sencha.com/extwebcomponents/
* Trial Download: https://www.sencha.com/products/extwebcomponents/evaluate/
* Licensing: https://www.sencha.com/store/extwebcomponents/
* EULA: https://www.sencha.com/legal/sencha-software-license-agreement/
* Support: https://www.sencha.com/company/contact/
* Community: https://stackoverflow.com/questions/tagged/extwebcomponents

### Repo Guides
- [Getting Started](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/GETTING_STARTED.md)
- [Migrate/Upgrade from a previous version](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/MIGRATE.md)
- [Understanding An App](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/UNDERSTANDING_AN_APP.md)
- [Using ext-webpack-plugin](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/USING_EXT_WEBPACK_PLUGIN.md)
- [What's New](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/WHATS_NEW.md)

Information for other frameworks:

- [Using Svelte](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/USING_SVELTE.md)
- [Using Vue](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.2.1/packages/ext-web-components-modern/guides/USING_VUE.md)

## Licensing
Evaluation/Trial License

### Keywords
webcomponents  ExtWebComponents  html   javascript   framework   components   widgets   ui   datagrid   pivotgrid   chart   treelist

