import Ext_field_Input from './Ext/field/Input.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtInputfieldComponent extends Ext_field_Input {
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
//        window.customElements.define('ext-inputfield', ExtInputfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfieldComponent))
