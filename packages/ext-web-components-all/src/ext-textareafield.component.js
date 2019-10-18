import Ext_form_TextArea from './Ext/form/TextArea.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTextareafieldComponent extends Ext_form_TextArea {
    constructor() {
        super (
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
