//import Ext_calendar_panel_Month from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Month.js';
import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_month extends Ext_calendar_panel_Month {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-month';
    }

}
window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(EWCCalendar_month));

