//import Ext_field_trigger_Time from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Time.js';
import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTimetrigger extends Ext_field_trigger_Time {
    constructor() {
        super ([], []);
        this.xtype = 'timetrigger';
    }

}
window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(EWCTimetrigger));

