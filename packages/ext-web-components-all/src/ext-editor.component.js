import Ext_Editor from './Ext/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtEditor extends Ext_Editor {
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
//        window.customElements.define('ext-editor', ExtEditor);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditor))
//export default reactify(ExtEditor);