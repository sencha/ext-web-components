import Ext_form_Text from './Ext/form/Text'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTextfieldComponent extends Ext_form_Text {
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
//        window.customElements.define('ext-textfield', ExtTextfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfieldComponent))
