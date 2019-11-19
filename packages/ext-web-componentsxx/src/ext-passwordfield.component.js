import Ext_form_Password from './Ext/form/Password'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPasswordfieldComponent extends Ext_form_Password {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'passwordfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-passwordfield', ExtPasswordfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(ExtPasswordfieldComponent))
