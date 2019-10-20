import Ext_form_Field from './Ext/form/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtField extends Ext_form_Field {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'field'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-field', ExtField);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(ExtField))
//export default reactify(ExtField);