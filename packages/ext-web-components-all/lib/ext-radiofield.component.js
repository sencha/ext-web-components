import Ext_form_Radio_Component from './Ext/form/Radio'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRadiofieldComponent extends Ext_form_Radio_Component {
    constructor() {
        super ()
        this.xtype = 'radiofield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radiofield', ExtRadiofieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-radiofield', HTMLParsedElement.withParsedCallback(ExtRadiofieldComponent))
