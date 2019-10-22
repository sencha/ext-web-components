import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTimetrigger extends Ext_field_trigger_Time {
    constructor() {
        super ([],[])
        this.xtype = 'timetrigger';
    }
}
window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(ExtTimetrigger))
