//import Ext_field_trigger_Expand from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Expand.js';
import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCExpandtrigger extends Ext_field_trigger_Expand {
    constructor() {
        super ([], []);
        this.xtype = 'expandtrigger';
    }

}
window.customElements.define('ext-expandtrigger', HTMLParsedElement.withParsedCallback(EWCExpandtrigger));

