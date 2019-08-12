import Ext_container_Container_Component from '../../../Ext/container/Container';

export default class Ext_calendar_view_Multi_Component extends Ext_container_Container_Component {
//events
//configs

static XTYPE() {return 'calendar-multiview'}
static PROPERTIESOBJECT() { return {
"compact":["boolean"],
"compactOptions":["object"],
"defaultView":["string"],
"layout":["object","string"],
"store":["object","Ext.calendar.store.Calendars"],
"timezoneOffset":["number"],
"value":["date"],
"views":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'moveNext',function: function() { return this.ext.moveNext() } },
{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
{ name:'setView',function: function(view) { return this.ext.setView(view) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Multi_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Multi_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_view_Multi_Component.METHODS(),
            Ext_calendar_view_Multi_Component.XTYPE(),
            Ext_calendar_view_Multi_Component.PROPERTIESOBJECT(),
            Ext_calendar_view_Multi_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_view_Multi_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Multi_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_view_Multi_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_view_Multi_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
