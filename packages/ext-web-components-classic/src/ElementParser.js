const ElementParser = (() => {

  if (window['Ext'] == undefined) {
    var showError = function showError() {
      console.error('error');
      document.body.innerHTML = "<div>" + "<h1>An error has occurred</h1>" + "The ExtWebComponents runtime cannot be found<p>" + "Possible reasons:<br>" + "<ul>" + "<li>node_modules folder is not found or corrupted (rerun npm install)" + "</ul>" + "</div>";
      window.stop();
    };

    var getToolkit = function getToolkit() {
      var folder = 'node_modules/@sencha/ext-web-components-';
      var classicfolder = folder + 'classic';
      var modernfolder = folder + 'modern';
      var xhr = new XMLHttpRequest();
      var toolkit = 'none';
      xhr.open('HEAD', classicfolder, false);
      xhr.send();

      if (xhr.status == "200") {
        toolkit = 'classic';
      }

      xhr.open('HEAD', modernfolder, false);
      xhr.send();

      if (xhr.status == "200") {
        toolkit = 'modern';
      }

      return toolkit;
    };

    var xhrObj = new XMLHttpRequest();
    console.warn('[Deprecation] and HEAD 404 (Not Found) errors below are expected');

    switch (window['ExtFramework']) {
      case 'react':
        console.log('react')
        console.warn('ext-react runtime not defined in index.html');
        console.warn('to fix, add following to public/index.html');
        console.warn('<script src="%PUBLIC_URL%/ext-runtime-classic/classic.material.js"></script>');
        console.warn('or');
        console.warn('<script src="%PUBLIC_URL%/ext-runtime-modern/modern.material.js"></script>');
// mjg need to determine toolkit
        xhrObj.open('GET', '/ext-runtime-classic/' + 'classic' + '.material.js', false);
        break;

      case 'angular':
        console.log('angular')
        console.warn('ext-angular runtime not defined in index.html');
        console.warn('to fix, add following to angular.json');
        console.warn('"scripts": ["ext-runtime-classic/classic.material.js"]');
        console.warn('or');
        console.warn('"scripts": ["ext-runtime-modern/classic.modern.js"]');

        //?? xhrObj.open('GET', '/ext-runtime-classic/' + 'classic' + '.material.js', false);

        break;

      case 'vue':
        console.warn('native vue not yet supported, use ext-web-components');
        break;

      case undefined:
        var toolkit = getToolkit();
        if (toolkit == 'none') {
          showError();
          return;
        }
        console.warn('ext-web-comonents runtime not defined in index.html');
        console.warn('to fix, add following to index.html');
        console.warn('<script src="./node_modules/@sencha/ext-web-components-' + toolkit + '/ext-runtime-classic/' + toolkit + '.material.js"></script>');
        xhrObj.open('GET', 'node_modules/@sencha/ext-web-components-' + toolkit + '/ext-runtime-classic/' + toolkit + '.material.js', false);
        break;

      default:
        console.error('ERROR');
        break;
    }

    xhrObj.send('');

    if (xhrObj.responseText.substring(0, 3) != 'var') {
      showError();
      return;
    }

    var se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
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