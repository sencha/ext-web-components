import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFroalaeditorfield extends Ext_froala_EditorField {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'froalaeditorfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditorfield', ExtFroalaeditorfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(ExtFroalaeditorfield))
//export default reactify(ExtFroalaeditorfield);