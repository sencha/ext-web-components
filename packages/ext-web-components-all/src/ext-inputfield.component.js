import Ext_field_Input from './Ext/field/Input.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtInputfield extends Ext_field_Input {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'inputfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-inputfield', ExtInputfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfield))
//export default reactify(ExtInputfield);