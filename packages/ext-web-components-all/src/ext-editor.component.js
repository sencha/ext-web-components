import Ext_Editor from './Ext/Editor.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtEditorComponent extends Ext_Editor {
    constructor() {
        super (
            [],
            []
        )
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
