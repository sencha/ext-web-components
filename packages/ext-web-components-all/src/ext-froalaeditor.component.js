import Ext_froala_Editor from './Ext/froala/Editor.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtFroalaeditorComponent extends Ext_froala_Editor {
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
//        window.customElements.define('ext-froalaeditor', ExtFroalaeditorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(ExtFroalaeditorComponent))
