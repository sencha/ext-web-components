import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRadiogroup extends Ext_field_RadioGroup {
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
//        window.customElements.define('ext-radiogroup', ExtRadiogroup);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-radiogroup', HTMLParsedElement.withParsedCallback(ExtRadiogroup))
//export default reactify(ExtRadiogroup);