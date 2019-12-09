const ElementParser = (() => {

  if (window['Ext'] == undefined) {
    var msg = ' warning  Ext engine and theme not defined in index.html - Deprecation below is expected Click the following link for discussion on how to resolve https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html'
    console.warn(msg);

    //var baseFolder = "./node_modules/@sencha/ext-web-components-" + framework + "/ext-runtime-" + framework;

    var baseFolder = "../ext-runtime-" + framework;
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', baseFolder + "/engine.js", false);
    xhrObj.send('');
    console.log(xhrObj.status)
    if (xhrObj.status == 404) {
      baseFolder = "./node_modules/@sencha/ext-web-components-" + framework + "/ext-runtime-" + framework;
      xhrObj.open('GET', baseFolder + "/engine.js", false);
      xhrObj.send('');
    }
    console.log(xhrObj.status)
    if (xhrObj.status != 200) {
      console.warn('cant find Ext engine - see https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html')
      return
    }

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
                            if (connectedCallback)
                                connectedCallback.apply(this, arguments);
                            if (method in this && !init.has(this)) {
                                const self = this;
                                const { ownerDocument } = self;
                                init.set(self, false);
                                if (ownerDocument.readyState === 'complete' || isParsed(self))
                                {
                                  parsedCallback(self);

                                    // //console.log(window.Ext);
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


    var framework = 'modern'
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