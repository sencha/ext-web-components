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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_calendar_Event_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_calendar_Event_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_calendar_Event_Component.METHODS()),
            events.concat(Ext_calendar_Event_Component.EVENTS())



            //events.concat(Ext_calendar_Event_Component.EVENTS()),
            //propertiesobject.concat(Ext_calendar_Event_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_calendar_Event_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_calendar_Event_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_calendar_Event_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_calendar_Event_Component.METHODS())
        )
        //this.XTYPE = Ext_calendar_Event_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_Event_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_calendar_Event_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_calendar_Event_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
