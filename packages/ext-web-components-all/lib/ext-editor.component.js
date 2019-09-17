import Ext_Editor_Component from './Ext/Editor'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtEditorComponent extends Ext_Editor_Component {
    constructor() {
        super ()
        this.xtype = 'editor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-editor', ExtEditorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditorComponent))
