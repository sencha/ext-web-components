import Ext_form_Radio_Component from './Ext/form/Radio'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRadioComponent extends Ext_form_Radio_Component {
    constructor() {
        super ()
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
