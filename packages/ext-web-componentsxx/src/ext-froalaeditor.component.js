import Ext_froala_Editor from './Ext/froala/Editor'
import HTMLParsedElement from './HTMLParsedElement'

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
