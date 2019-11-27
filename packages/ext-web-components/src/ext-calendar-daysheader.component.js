//import Ext_calendar_header_Days from '@sencha/ext-runtime-base/dist/./Ext/calendar/header/Days.js';
import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_daysheader extends Ext_calendar_header_Days {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-daysheader';
    }

}
window.customElements.define('ext-calendar-daysheader', HTMLParsedElement.withParsedCallback(EWCCalendar_daysheader));

