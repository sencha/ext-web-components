import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";

var ElementParser = function () {
  var toolkit = 'classic';
  var theme = 'material';
  var origCwd = process.cwd();
  var target = 'node_modules';
  var v;
  var n;

  if (window['Ext'] == undefined) {
    var linkIt = function linkIt(num) {
      var xhrLink = new XMLHttpRequest();
      xhrLink.open('GET', "node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit + "/" + theme + "/" + theme + "-all_" + num + ".css", false);
      xhrLink.send('');
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = xhrLink.responseText;
      document.getElementsByTagName('head')[0].appendChild(style);
    };

    var scriptIt = function scriptIt() {
      var se;
      xhrObj.open('GET', "node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit + "/" + toolkit + ".engine.js", false);
      xhrObj.send('');

      if (xhrObj.responseText.substring(0, 3) != 'var') {
        showError();
        return;
      }

      se = document.createElement('script');
      se.type = "text/javascript";
      se.text = xhrObj.responseText;
      document.getElementsByTagName('head')[0].appendChild(se);
    };

    var xhrObj = new XMLHttpRequest();

    var showError = function showError() {
      console.error('error');
      document.body.innerHTML = "<div>" + "<h1>An error has occurred</h1>" + "The ExtWebComponents runtime cannot be found<p>" + "Possible reasons:<br>" + "<ul>" + "<li>node_modules folder is not found or corrupted (rerun npm install)" + "</ul>" + "</div>";
      window.stop();
    };

    v = process.cwd();
    console.log(v);
    n = v.includes(target);
    console.log(n);

    while (n == true) {
      process.chdir('../');
      v = process.cwd();
      console.log(v);
      n = v.includes(target);
    }

    console.warn('[Deprecation] error below is expected');

    switch (window['ExtFramework']) {
      case 'react':
        console.log('react');
        console.warn('ext-react runtime not defined in index.html');
        console.warn('to fix, add following 2 lines to public/index.html');
        console.warn('<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/ext-runtime-${ toolkit }/${ theme }/${ theme }-all.css"></link>');
        console.warn('<script src="%PUBLIC_URL%/ext-runtime-${ toolkit }/${ toolkit }.engine.js"></script>'); //xhrObj.open('GET', '/ext-runtime-classic/' + 'classic' + '.material.js', false);

        linkIt(1);
        linkIt(2);
        scriptIt();
        break;

      case 'angular':
        console.log('angular');
        console.warn('ext-angular runtime not defined in index.html');
        console.warn('to fix, add following 2 items to angular.json');
        console.warn('"styles": ["ext-runtime-${ toolkit }/${ theme }/${ theme }-all.css]');
        console.warn('"scripts": ["ext-runtime-${ toolkit }/${ toolkit }.engine.js]');
        linkIt(1);
        linkIt(2);
        scriptIt();
        break;

      case 'vue':
        console.warn('native vue not yet supported, use ext-web-components');
        break;

      case undefined:
        console.warn('ext-web-components runtime not defined in index.html');
        console.warn('to fix, add following 2 lines to index.html');
        console.warn("<script src=\"./node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit + "/" + toolkit + ".engine.js\"></script>");
        console.warn("<link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit + "/" + theme + "/" + theme + "-all.css\"></link>");
        linkIt(1);
        linkIt(2);
        scriptIt();
        break;

      default:
        console.error('ERROR');
        break;
    }

    process.chdir(origCwd);

    if (Ext.isModern == true) {
      var ElementCell = Ext.define('Ext.ElementCell', {
        extend: 'Ext.grid.cell.Cell',
        xtype: 'elementcell'
      });
    }
  } else {
    if (Ext.isModern == true) {
      var _ElementCell = Ext.define('Ext.ElementCell', {
        extend: 'Ext.grid.cell.Cell',
        xtype: 'elementcell'
      });
    }
  }

  var DCL = 'DOMContentLoaded';
  var init = new window.WeakMap();
  var queue = [];

  var isParsed = function isParsed(el) {
    do {
      if (el.nextSibling) return true;
    } while (el = el.parentNode);

    return false;
  };

  var upgrade = function upgrade() {
    queue.splice(0).forEach(function (info) {
      if (init.get(info[0]) !== true) {
        init.set(info[0], true);
        info[0][info[1]]();
      }
    });
  };

  document.addEventListener(DCL, upgrade);

  var ElementParser =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inheritsLoose(ElementParser, _HTMLElement);

    function ElementParser() {
      return _HTMLElement.apply(this, arguments) || this;
    }

    ElementParser.withParsedCallback = function withParsedCallback(Class, name) {
      var _Object$definePropert;

      if (name === void 0) {
        name = 'parsed';
      }

      var prototype = Class.prototype;
      var connectedCallback = prototype.connectedCallback;
      var method = name + 'Callback';

      var cleanUp = function cleanUp(el, observer, ownerDocument, onDCL) {
        observer.disconnect();
        ownerDocument.removeEventListener(DCL, onDCL);
        parsedCallback(el);
      };

      var parsedCallback = function parsedCallback(el) {
        if (!queue.length) requestAnimationFrame(upgrade);
        queue.push([el, method]);
      };

      Object.defineProperties(prototype, (_Object$definePropert = {
        connectedCallback: {
          configurable: true,
          value: function value() {
            if (connectedCallback) {
              connectedCallback.apply(this, arguments);
            }

            var self = this;

            if (method in this && !init.has(this)) {
              var ownerDocument = self.ownerDocument;
              init.set(self, false);

              if (ownerDocument.readyState === 'complete' || isParsed(self)) {
                parsedCallback(self);
              } else {
                var onDCL = function onDCL() {
                  return cleanUp(self, observer, ownerDocument, onDCL);
                };

                ownerDocument.addEventListener(DCL, onDCL);
                var observer = new MutationObserver(function () {
                  /* istanbul ignore else */
                  if (isParsed(self)) cleanUp(self, observer, ownerDocument, onDCL);
                });
                observer.observe(self.parentNode, {
                  childList: true,
                  subtree: true
                });
              }
            } else {
              requestAnimationFrame(function () {
                self['parsedCallback']();
              }); //setTimeout(function(){
              //  self['parsedCallback']();
              //}, 0);
            }
          }
        }
      }, _Object$definePropert[name] = {
        configurable: true,
        get: function get() {
          return init.get(this) === true;
        }
      }, _Object$definePropert));
      return Class;
    };

    return ElementParser;
  }(_wrapNativeSuper(HTMLElement));

  return ElementParser.withParsedCallback(ElementParser);
}();

export default ElementParser; //var framework = 'classic'
//var list= document.all;
//for (var i = 0; i < list.length; i++) {
//  if (list[i].tagName == 'SCRIPT') {
//    if (list[i].type == 'module') {
//      var s = list[i].getAttribute('src');
//      var modern = s.includes('modern');
//      var classic = s.includes('classic');
//      if (modern) { framework = 'modern' }
//      if (classic) { framework = 'classic' }
//    }
//  }
//}
//function getIndicesOf(searchStr, str, caseSensitive) {
//  var searchStrLen = searchStr.length;
//  if (searchStrLen == 0) {return [];}
//  var startIndex = 0, index, indices = [];
//  if (!caseSensitive) {
//    str = str.toLowerCase();
//    searchStr = searchStr.toLowerCase();
//  }
//  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
//    indices.push(index);
//    startIndex = index + searchStrLen;
//  }
//  return indices;
//}
//var indices = getIndicesOf("/", import.meta.url);
//var rootPath = import.meta.url.substring(0,indices[indices.length-2])
//var baseFolder = rootPath + "/ext-runtime-" + toolkit;