//import { doIt } from '../../runtime/classic.enterprise.SDK_EMPTY.js';
//import '../../runtime/classic.enterprise.SDK_FULL.js';
//import '../../runtime/classic.material.fewest.SDK_FULL.js';
//import '@sencha/ext-web-components-classic-enterprise';
//import '@sencha/ext-web-components-classic-material';
//import { addRuntime} from './util.js';

const ElementParser = (() => {
  var toolkit = 'classic';

  //var theme = 'material';

  //var themedefined = false
  //for (var i = 0; i < document.styleSheets.length; i++) {
  //  if (document.styleSheets[i].href.includes('material-all.css') == true) {
  //    themedefined = true;
  //  }
  //  if (document.styleSheets[i].href.includes('material-all.css') == true) {
  //    themedefined = true;
  //  }
  //}
  //if (!themedefined) {
  //  import('./engine/modern/themes/modern.material.fewest.js')
  //  .then((something) => {
  //     console.log('importing theme');
  //  });
  //}

  //if (window['Ext'] == undefined) {
  //  doIt()
  //  //addRuntime(toolkit, theme);
  //}

  if (Ext.isModern == true) {
    const ElementCell = Ext.define('Ext.ElementCell', {
      extend: 'Ext.grid.cell.Cell',
      xtype: 'elementcell'
    });
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
                          if (ownerDocument.readyState === 'interactive' || ownerDocument.readyState === 'complete' || isParsed(self))
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







    //var framework = 'classic'
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