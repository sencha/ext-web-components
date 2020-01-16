const ElementParser = (() => {

  if (window['Ext'] == undefined) {
    console.warn('Ext engine and theme not defined in index.html');
    console.warn('Deprecation below is expected');
    //console.warn('Click the following link for discussion on how to resolve');
    //console.warn('https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html');

    var toolkit = 'modern';

    //var baseFolder = "../ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
    var baseFolder = "./node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', baseFolder + "/boot.js", false);
    xhrObj.send('');

    // console.log(xhrObj.status)
    if (xhrObj.status == 404) {
      //baseFolder = "./node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
      baseFolder = "../ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
      xhrObj.open('GET', baseFolder + "/boot.js", false);
      xhrObj.send('');
    }
    // console.log(xhrObj.status)
    if (xhrObj.status != 200) {
      console.warn('cant find Ext engine - see https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html')
      return
    }

    var se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
    console.warn(baseFolder + "/boot.js" + " " + "was dynamically loaded");

    xhrObj.open('GET', baseFolder + "/engine.js", false);
    xhrObj.send('');
    var se1 = document.createElement('script');
    se1.type = "text/javascript";
    se1.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se1);
    console.warn(baseFolder + "/engine.js" + " " + "was dynamically loaded");

    xhrObj.open('GET', baseFolder + "/themes/css." + toolkit + ".material.js", false);
    xhrObj.send('');
    var se2 = document.createElement('script');
    se2.type = "text/javascript";
    se2.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se2);
    console.warn(baseFolder + "/themes/css." + toolkit + ".material.js" + " " + "was dynamically loaded");
  }

  const DCL = 'DOMContentLoaded';
  const init = new window.WeakMap;
  const queue = [];
  const isParsed = el => {
      do {
          if (el.nextSibling)
              return true;
      } while (el = el.parentNode);
      return false;
  };
  const upgrade = () => {
      queue.splice(0).forEach(info => {
          if (init.get(info[0]) !== true) {
              init.set(info[0], true);
              info[0][info[1]]();
          }
      });
  };
  document.addEventListener(DCL, upgrade);
  class ElementParser extends HTMLElement {
    static withParsedCallback(Class, name = 'parsed') {
      const { prototype } = Class;
      const { connectedCallback } = prototype;
      const method = name + 'Callback';
      const cleanUp = (el, observer, ownerDocument, onDCL) => {
          observer.disconnect();
          ownerDocument.removeEventListener(DCL, onDCL);
          parsedCallback(el);
      };
      const parsedCallback = el => {
          if (!queue.length)
              requestAnimationFrame(upgrade);
          queue.push([el, method]);
      };
      Object.defineProperties(
          prototype,
          {
              connectedCallback: {
                  configurable: true,
                  value() {
                      if (connectedCallback) {
                        connectedCallback.apply(this, arguments);
                      }
                      const self = this;
                      if (method in this && !init.has(this)) {

                          const { ownerDocument } = self;
                          init.set(self, false);
                          if (ownerDocument.readyState === 'complete' || isParsed(self))
                          {
                            parsedCallback(self);
                          }
                          else {
                              const onDCL = () => cleanUp(self, observer, ownerDocument, onDCL);
                              ownerDocument.addEventListener(DCL, onDCL);
                              const observer = new MutationObserver(() => {
                                  /* istanbul ignore else */
                                  if (isParsed(self))
                                      cleanUp(self, observer, ownerDocument, onDCL);
                              });
                              observer.observe(self.parentNode, { childList: true, subtree: true });
                          }
                      }
                      else {
                        requestAnimationFrame(function () {
                          self['parsedCallback']();
                        });
                        //setTimeout(function(){
                        //  self['parsedCallback']();
                        //}, 0);
                      }
                  }
              },
              [name]: {
                  configurable: true,
                  get() {
                      return init.get(this) === true;
                  }
              }
          }
      );
      return Class;
    }
  }
  return ElementParser.withParsedCallback(ElementParser);
})();
export default ElementParser;







    //var framework = 'modern'
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