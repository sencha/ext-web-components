import Ext_calendar_EventBase_Component from '../../Ext/calendar/EventBase';

export default class Ext_calendar_Event_Component extends Ext_calendar_EventBase_Component {
//events
//configs

static XTYPE() {return 'calendar-event'}
static PROPERTIESOBJECT() { return {
"timeFormat":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_Event_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_Event_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_calendar_Event_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_Event_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_calendar_Event_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_calendar_Event_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}