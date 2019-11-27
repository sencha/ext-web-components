//import Ext_field_trigger_SpinUp from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/SpinUp.js';
import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSpinuptrigger extends Ext_field_trigger_SpinUp {
    constructor() {
        super ([], []);
        this.xtype = 'spinuptrigger';
    }

}
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(EWCSpinuptrigger));

