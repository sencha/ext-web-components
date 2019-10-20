import Ext_form_Number from './Ext/form/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtNumberfield extends Ext_form_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numberfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numberfield', ExtNumberfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(ExtNumberfield))
//export default reactify(ExtNumberfield);