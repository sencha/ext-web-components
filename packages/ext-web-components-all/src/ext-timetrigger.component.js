import Ext_field_trigger_Time from './Ext/field/trigger/Time.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTimetriggerComponent extends Ext_field_trigger_Time {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'timetrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timetrigger', ExtTimetriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(ExtTimetriggerComponent))
