import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTimefield extends Ext_field_Time {
    constructor() {
        super ([],[])
        this.xtype = 'timefield';
    }
}
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefield))
