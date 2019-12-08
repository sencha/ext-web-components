//import Ext_calendar_panel_Week from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Week.js';
import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_week extends Ext_calendar_panel_Week {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-week';
    }

}
window.customElements.define('ext-calendar-week', ElementParser.withParsedCallback(EWCCalendar_week));

