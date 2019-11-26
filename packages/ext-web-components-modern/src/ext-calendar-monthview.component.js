//import Ext_calendar_view_Month from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Month.js';
import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_monthview extends Ext_calendar_view_Month {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-monthview';
    }

}
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(EWCCalendar_monthview));

