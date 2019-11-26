//import Ext_field_trigger_Clear from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Clear.js';
import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCleartrigger extends Ext_field_trigger_Clear {
    constructor() {
        super ([], []);
        this.xtype = 'cleartrigger';
    }

}
window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(EWCCleartrigger));

