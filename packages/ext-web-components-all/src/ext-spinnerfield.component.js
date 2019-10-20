import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSpinnerfield extends Ext_form_Spinner {
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
//        window.customElements.define('ext-spinnerfield', ExtSpinnerfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfield))
//export default reactify(ExtSpinnerfield);