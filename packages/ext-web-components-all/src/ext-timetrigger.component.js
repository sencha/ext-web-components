import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTimetrigger extends Ext_field_trigger_Time {
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
//        window.customElements.define('ext-timetrigger', ExtTimetrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(ExtTimetrigger))
//export default reactify(ExtTimetrigger);