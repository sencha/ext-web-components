import Ext_Gadget_Component from '../../Ext/Gadget';

export default class Ext_calendar_EventBase_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"defaultTitle":["string"],
"endDate":["date"],
"mode":["string"],
"model":["Ext.calendar.model.EventBase"],
"palette":["Ext.calendar.theme.Palette"],
"resize":["boolean"],
"startDate":["date"],
"title":["string"],
"touchAction":["object"],
"view":["Ext.calendar.view.Base"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'cloneForProxy',function: function() { return this.ext.cloneForProxy() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_EventBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_EventBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_calendar_EventBase_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_EventBase_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_calendar_EventBase_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_calendar_EventBase_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
