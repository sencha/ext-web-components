import Ext_form_Email from './Ext/form/Email'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtEmailfieldComponent extends Ext_form_Email {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'emailfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emailfield', ExtEmailfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfieldComponent))
