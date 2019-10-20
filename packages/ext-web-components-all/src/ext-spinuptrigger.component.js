import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSpinuptrigger extends Ext_field_trigger_SpinUp {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spinuptrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinuptrigger', ExtSpinuptrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptrigger))
//export default reactify(ExtSpinuptrigger);