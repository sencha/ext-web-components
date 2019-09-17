import Ext_field_Input_Component from './Ext/field/Input'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtInputfieldComponent extends Ext_field_Input_Component {
    constructor() {
        super (
            {},
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
