import Ext_form_Text_Component from './Ext/form/Text'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTextfieldComponent extends Ext_form_Text_Component {
    constructor() {
        super ()
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
