import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar extends Ext_calendar_panel_Panel {
    constructor() {
        super ([],[])
        this.xtype = 'calendar';
    }
}
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(ExtCalendar))
