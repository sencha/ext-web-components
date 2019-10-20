import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSpindowntrigger extends Ext_field_trigger_SpinDown {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spindowntrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spindowntrigger', ExtSpindowntrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(ExtSpindowntrigger))
//export default reactify(ExtSpindowntrigger);