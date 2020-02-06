## Understanding an app for @sencha/ext-web-components-classic

This guide will illustrate some of the key features of ExtWebComponents within a JavaScript application.
To get a starter application created,
follow the [Getting Started guide](https://github.com/sencha/ext-web-components/blob/ext-web-components-7.1.1/packages/ext-web-components-classic/GETTING_STARTED.md).

## adding ExtWebComponents to an existing JavaScript application

To add ExtWebComponents to an existing application, run the following
in the root folder of the JavaScript app:

```
npm install @sencha/ext-web-components-classic
``

You will need to add several entries in the 'index.html'
file.

```
<script
 src="./node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/classic.engine.js">
</script>
<link
 rel="stylesheet"
 type="text/css"
 href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/material/material-all.css">
</link>
```


## Changing the theme for an ExtWebComponents app

in the './node_modules/@sencha/ext-web-components-classic/ext-runtime-classic' folder, you will notice several theme folders.  To change
and use one of these themes, find the following section in index.html:

```
<link
 rel="stylesheet"
 type="text/css"
 href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/material/material-all.css">
</link>
```

notice that this line points to the material folder and material-all.css file.  For example, to change to triton, update to the following:

```
<link
 rel="stylesheet"
 type="text/css"
 href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/triton/triton-all.css">
</link>
```


here are all the classic themes available:

```
href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/graphite/graphite-all.css">
href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/material/material-all.css">
href="node_modules/@sencha/ext-web-components-classic/ext-runtime-classic/triton/triton-all.css">
```




## understanding the ExtWebComponents 'ready' event

When using ExtWebComponents components, you want to make sure that the components are completely available
before calling any component methods or updating properties in code.
For this reason, every componenthas a 'ready' event.

This event, when listened to, will indicate to your app that ALL ExtWebComponents components on the page are
ready and available.  With this event, 2 parameters are sent (event.detail.cmp and event.detail.cmpObj), the first is the ExtWebComponents component of
the calling ready event,
the second is an array of components on your page that have the 'extname' property applied to it.

```
HTML
<ext-panel
    onready="main.viewportReady"
>
  <ext-button extname="button1"></ext-button>
  <ext-button extname="button2"></ext-button>
</ext-panel>

JAVASCRIPT
    viewportReady = event => {
        for (var prop in event.detail.cmpObj) {
            this[prop] = event.detail.cmpObj[prop];
        }
        //you can now call:
        //this['button1'].setText('click me')
    }

```
