//import Ext_calendar_panel_Panel from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Panel.js';
import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar extends Ext_calendar_panel_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'calendar';
    }

}
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(EWCCalendar));

