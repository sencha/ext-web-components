import Ext_form_TextArea_Component from './Ext/form/TextArea'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTextareafieldComponent extends Ext_form_TextArea_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'textareafield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textareafield', ExtTextareafieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafieldComponent))
