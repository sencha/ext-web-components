import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTextfield extends Ext_form_Text {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'textfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textfield', ExtTextfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfield))
//export default reactify(ExtTextfield);