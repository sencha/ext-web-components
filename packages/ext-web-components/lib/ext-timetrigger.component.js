import Ext_field_trigger_Time_Component from './Ext/field/trigger/Time'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTimetriggerComponent extends Ext_field_trigger_Time_Component {
    constructor() {
        super (
            {},
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
