import Ext_froala_Editor from './Ext/froala/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFroalaeditor extends Ext_froala_Editor {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'froalaeditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditor', ExtFroalaeditor);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(ExtFroalaeditor))
//export default reactify(ExtFroalaeditor);