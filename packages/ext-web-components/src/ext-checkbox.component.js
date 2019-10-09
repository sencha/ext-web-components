import Ext_form_Checkbox from './Ext/form/Checkbox'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCheckboxComponent extends Ext_form_Checkbox {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'checkbox'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkbox', ExtCheckboxComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkbox', HTMLParsedElement.withParsedCallback(ExtCheckboxComponent))
