import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFieldset extends Ext_form_FieldSet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'fieldset'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldset', ExtFieldset);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldset))
//export default reactify(ExtFieldset);