//import Ext_calendar_view_Days from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Days.js';
import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_daysview extends Ext_calendar_view_Days {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-daysview';
    }

}
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(EWCCalendar_daysview));

