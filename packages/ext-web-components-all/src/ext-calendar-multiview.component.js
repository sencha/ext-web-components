import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_multiview extends Ext_calendar_view_Multi {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-multiview';
    }
}
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiview))
