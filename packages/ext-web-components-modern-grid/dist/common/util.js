export function addRuntime(toolkit, theme) {
  var xhrObj = new XMLHttpRequest();
  var nodeLocationBlank = "";
  var nodeLocation = "node_modules/@sencha/ext-web-components-" + toolkit + "/";
  var runtimeLocation = "ext-runtime-" + toolkit + "/";

  function linkIt(num) {
    var xhrLink = new XMLHttpRequest();
    xhrLink.open('GET', "" + nodeLocation + runtimeLocation + theme + "/" + theme + "-all_" + num + ".css", false);
    xhrLink.send('');
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = xhrLink.responseText;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  function scriptIt() {
    xhrObj.open('GET', "" + nodeLocationBlank + runtimeLocation + toolkit + ".engine.pro.js", false);
    xhrObj.send('');

    if (xhrObj.status == 404) {
      xhrObj.open('GET', "" + nodeLocation + runtimeLocation + toolkit + ".engine.pro.js", false);
      xhrObj.send('');

      if (xhrObj.status == 404) {
        showError();
        return -100;
      }
    } else {
      nodeLocation = nodeLocationBlank;
    }

    if (xhrObj.responseText.substring(0, 3) != 'var') {
      showError();
      return -100;
    }

    var se;
    se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
    return 0;
  }

  var showError = function showError() {
    document.body.innerHTML = "\n    <div>\n    <h1>An error has occurred</h1>\n    The ExtWebComponents runtime cannot be found\n    <p>Solutions:<br>\n    <ul>\n    <li>add @sencha/ext-web-components-" + toolkit + " to package.json\n    <li>copy ext-runtime-" + toolkit + " to the root\n    </ul>\n    </div>;\n    ";
    window.stop();
  };

  if (scriptIt() != 0) console.warn('[Deprecation] error below is expected');

  switch (window['ExtFramework']) {
    case 'react':
      console.log('react');
      console.warn('ext-react runtime not defined in index.html');
      console.warn('to fix, add following 2 lines to public/index.html');
      console.warn('<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/ext-runtime-${ toolkit }/${ theme }/${ theme }-all.css"></link>');
      console.warn('<script src="%PUBLIC_URL%/ext-runtime-${ toolkit }/${ toolkit }.engine.enterprise.js"></script>');
      linkIt(1);
      linkIt(2); //scriptIt()

      break;

    case 'angular':
      console.log('angular');
      console.warn('ext-angular runtime not defined in index.html');
      console.warn('to fix, add following 2 items to angular.json');
      console.warn('"styles": ["ext-runtime-${ toolkit }/${ theme }/${ theme }-all.css]');
      console.warn('"scripts": ["ext-runtime-${ toolkit }/${ toolkit }.engine.enterprise.js]');
      linkIt(1);
      linkIt(2); //scriptIt()

      break;

    case 'vue':
      console.warn('native vue not yet supported, use ext-web-components');
      break;

    case undefined:
      console.warn('ext-web-components runtime not defined in index.html');
      console.warn('to fix, add following 2 lines to index.html');
      console.warn("<script src=\"" + nodeLocation + runtimeLocation + toolkit + ".engine.enterprise.js\"></script>");
      console.warn("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + nodeLocation + runtimeLocation + theme + "/" + theme + "-all.css\"></link>");
      linkIt(1);
      linkIt(2); //scriptIt()

      break;

    default:
      console.error('ERROR');
      break;
  }
}
export function doProp(me, prop) {
  try {
    Object.defineProperty(me, prop, {
      get: function get() {
        return doGet(me, prop);
      },
      set: function set(val) {
        doSet(me, prop, val);
      }
    });
  } catch (e) {}
}

function doSet(me, prop, val) {
  //console.log('doSet: ' + prop)
  if (prop == 'plugins') {
    return;
  }

  try {
    var prev = JSON.stringify(me.attributeObjects[prop]);
    var curr = JSON.stringify(val);

    if (prev == curr) {
      return;
    }
  } catch (e) {//console.log(e)
  }

  if (val) {
    var val2;
    var valExt;

    if (typeof val == 'object' || typeof val == 'function' || typeof val == '[object Object]') {
      me.attributeObjects[prop] = val;
      val2 = typeof val;
      valExt = val;
    } else {
      me.attributeObjects[prop] = val;
      val2 = val;
      valExt = val;
    }

    var method = 'set' + prop[0].toUpperCase() + prop.substring(1);

    try {
      me.A.ext[method](valExt);
    } catch (e) {}

    me.setAttribute(prop, val2);
  } else {
    me.removeAttribute(prop);
  }
}

function doGet(me, prop) {
  //console.log('doGet: ' + prop)
  if (me.getAttribute(prop) == 'object' || me.getAttribute(prop) == 'function' || me.getAttribute(prop) == '[object Object]') {
    return me.attributeObjects[prop];
  } else if (me.getAttribute(prop) != null) {
    return me.getAttribute(prop);
  } else {
    return null;
  }
}

export function filterProp(propertyValue, property, me) {
  try {
    if (propertyValue == 'error') {
      return me.attributeObjects[property];
    }

    var parsedProp = JSON.parse(propertyValue);

    if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp) || !isNaN(parsedProp) && parsedProp !== 0) {
      return parsedProp;
    } else {
      return propertyValue;
    }
  } catch (e) {
    return propertyValue;
  }
}
export function isClassicDock(childcmp) {
  if (Ext.isClassic == false) {
    return false;
  }

  if (childcmp.config == undefined) {
    return false;
  }

  if (childcmp.config.dock != undefined) {
    return true;
  } else {
    return false;
  }
}
export function isMenu(childxtype) {
  if (childxtype === 'menu') {
    return true;
  } else {
    return false;
  }
}
export function isRenderercell(childxtype) {
  if (childxtype === 'renderercell') {
    return true;
  } else {
    return false;
  }
}
export function isParentGridAndChildToolbar(parentxtype, childxtype) {
  if (parentxtype === 'grid' && childxtype === 'toolbar') {
    return true;
  } else {
    return false;
  }
}
export function isParentGridAndChildColumn(parentxtype, childxtype) {
  if (parentxtype === 'grid' && childxtype.includes("column")) {
    return true;
  } else {
    return false;
  }
}
export function isTooltip(childxtype) {
  if (childxtype === 'tooltip') {
    return true;
  } else {
    return false;
  }
}
export function isPlugin(childxtype) {
  if (childxtype === 'plugin') {
    return true;
  } else {
    return false;
  }
}