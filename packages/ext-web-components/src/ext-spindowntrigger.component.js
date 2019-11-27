//import Ext_field_trigger_SpinDown from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/SpinDown.js';
import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSpindowntrigger extends Ext_field_trigger_SpinDown {
    constructor() {
        super ([], []);
        this.xtype = 'spindowntrigger';
    }

}
window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(EWCSpindowntrigger));

