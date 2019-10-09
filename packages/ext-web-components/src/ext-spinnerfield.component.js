import Ext_form_Spinner from './Ext/form/Spinner'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSpinnerfieldComponent extends Ext_form_Spinner {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spinnerfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinnerfield', ExtSpinnerfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfieldComponent))
