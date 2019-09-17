import Ext_field_RadioGroup_Component from './Ext/field/RadioGroup'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRadiogroupComponent extends Ext_field_RadioGroup_Component {
    constructor() {
        super ()
        this.xtype = 'radiogroup'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radiogroup', ExtRadiogroupComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-radiogroup', HTMLParsedElement.withParsedCallback(ExtRadiogroupComponent))
