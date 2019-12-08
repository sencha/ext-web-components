import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";

var ElementParser = function () {
  if (window['Ext'] == undefined) {
    var msg = ' warning  Ext engine and theme not defined in index.html - Deprecation below is expected Click the following link for discussion on how to resolve https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html';
    console.warn(msg);
    var framework = 'classic'; //var list= document.all;
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

    var baseFolder = "./node_modules/@sencha/ext-web-components-" + framework + "/ext-runtime-" + framework;
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', baseFolder + "/engine.js", false);
    xhrObj.send('');
    var se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
    xhrObj.open('GET', baseFolder + "/css.prod.js", false);
    xhrObj.send('');
    var se2 = document.createElement('script');
    se2.type = "text/javascript";
    se2.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se2);
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
            if (connectedCallback) connectedCallback.apply(this, arguments);

            if (method in this && !init.has(this)) {
              var self = this;
              var ownerDocument = self.ownerDocument;
              init.set(self, false);

              if (ownerDocument.readyState === 'complete' || isParsed(self)) {
                parsedCallback(self); // //console.log(window.Ext);
                // if (window.Ext == undefined) {
                //     var striptTag = document.createElement('script');
                //     striptTag.type = 'text/javascript';
                //     striptTag.src = './node_modules/@sencha/ext-runtime-modern-base/engine.js';
                //     striptTag.onload = function() {
                //       var cssStriptTag = document.createElement('script');
                //       cssStriptTag.type = 'text/javascript';
                //       cssStriptTag.src = './node_modules/@sencha/ext-runtime-modern-base/css.prod.js';
                //       cssStriptTag.onload = function() {
                //         console.log('load done');
                //         Ext.onReady(function() {
                //             parsedCallback(self);
                //         });
                //     };
                //     document.getElementsByTagName('head')[0].appendChild(cssStriptTag);
                //         // var linkTag = document.createElement('link');
                //         // linkTag.rel = 'stylesheet';
                //         // linkTag.type = 'text/css';
                //         // linkTag.href = './node_modules/@sencha/ext-runtime-base/theme/material/material-all.css';
                //         // linkTag.onload = function() {
                //         //     console.log('load done');
                //         //     Ext.onReady(function() {
                //         //         parsedCallback(self);
                //         //     });
                //         // };
                //         // document.getElementsByTagName('head')[0].appendChild(linkTag);
                //     };
                //     document.getElementsByTagName('head')[0].appendChild(striptTag);
                // }
                // else {
                //     parsedCallback(self);
                // }
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

export default ElementParser;