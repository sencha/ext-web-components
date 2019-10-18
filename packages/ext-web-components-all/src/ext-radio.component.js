import Ext_form_Radio from './Ext/form/Radio.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRadioComponent extends Ext_form_Radio {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'radio'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radio', ExtRadioComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadioComponent))
