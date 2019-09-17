import Ext_form_Checkbox_Component from './Ext/form/Checkbox'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCheckboxfieldComponent extends Ext_form_Checkbox_Component {
    constructor() {
        super ()
        this.xtype = 'checkboxfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkboxfield', ExtCheckboxfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkboxfield', HTMLParsedElement.withParsedCallback(ExtCheckboxfieldComponent))
