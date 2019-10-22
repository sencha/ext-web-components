import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSpinuptrigger extends Ext_field_trigger_SpinUp {
    constructor() {
        super ([],[])
        this.xtype = 'spinuptrigger';
    }
}
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptrigger))
