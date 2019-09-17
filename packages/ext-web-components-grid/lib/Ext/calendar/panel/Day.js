import Ext_calendar_panel_Days_Component from '../../../Ext/calendar/panel/Days';

export default class Ext_calendar_panel_Day_Component extends Ext_calendar_panel_Days_Component {
//events
//configs

static XTYPE() {return 'calendar-day'}
static PROPERTIESOBJECT() { return {
"view":["object"],
"visibleDays":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_Day_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_Day_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_calendar_panel_Day_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Day_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_calendar_panel_Day_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_calendar_panel_Day_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}