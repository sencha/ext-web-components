import Ext_form_Password from './Ext/form/Password.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPasswordfield extends Ext_form_Password {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'passwordfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-passwordfield', ExtPasswordfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(ExtPasswordfield))
//export default reactify(ExtPasswordfield);