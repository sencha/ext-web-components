//import Ext_field_trigger_Trigger from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Trigger.js';
import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTrigger extends Ext_field_trigger_Trigger {
    constructor() {
        super ([], []);
        this.xtype = 'trigger';
    }

}
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(EWCTrigger));

