//import Ext_calendar_panel_Weeks from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Weeks.js';
import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_weeks extends Ext_calendar_panel_Weeks {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-weeks';
    }

}
window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(EWCCalendar_weeks));

