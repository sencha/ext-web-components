import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTrigger extends Ext_field_trigger_Trigger {
    constructor() {
        super ([],[])
        this.xtype = 'trigger';
    }
}
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(ExtTrigger))
