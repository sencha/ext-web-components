import Ext_calendar_panel_Days_Component from '../../../Ext/calendar/panel/Days';

export default class Ext_calendar_panel_Week_Component extends Ext_calendar_panel_Days_Component {
//events
//configs

static XTYPE() {return 'calendar-week'}
static PROPERTIESOBJECT() { return {
"firstDayOfWeek":["number"],
"value":["date"],
"view":["object"],
"visibleDays":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_Week_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_Week_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_panel_Week_Component.METHODS(),
            Ext_calendar_panel_Week_Component.XTYPE(),
            Ext_calendar_panel_Week_Component.PROPERTIESOBJECT(),
            Ext_calendar_panel_Week_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_panel_Week_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Week_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Week_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Week_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
