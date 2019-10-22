import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSpindowntrigger extends Ext_field_trigger_SpinDown {
    constructor() {
        super ([],[])
        this.xtype = 'spindowntrigger';
    }
}
window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(ExtSpindowntrigger))
