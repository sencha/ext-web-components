import Ext_form_Email from './Ext/form/Email.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtEmailfield extends Ext_form_Email {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'emailfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emailfield', ExtEmailfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfield))
//export default reactify(ExtEmailfield);