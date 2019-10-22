import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCleartrigger extends Ext_field_trigger_Clear {
    constructor() {
        super ([],[])
        this.xtype = 'cleartrigger';
    }
}
window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(ExtCleartrigger))
