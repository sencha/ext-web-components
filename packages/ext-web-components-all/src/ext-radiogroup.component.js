import Ext_field_RadioGroup from './Ext/field/RadioGroup.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRadiogroupComponent extends Ext_field_RadioGroup {
    constructor() {
        super (
            [],
            []
        )
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
