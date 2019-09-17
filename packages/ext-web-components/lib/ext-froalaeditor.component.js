import Ext_froala_Editor_Component from './Ext/froala/Editor'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFroalaeditorComponent extends Ext_froala_Editor_Component {
    constructor() {
        super (
            {},
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
