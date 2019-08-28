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

constructor() {
    super (
        Ext_calendar_EventBase_Component.METHODS(),
        Ext_calendar_EventBase_Component.XTYPE(),
        Ext_calendar_EventBase_Component.PROPERTIESOBJECT(),
        Ext_calendar_EventBase_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_EventBase_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_EventBase_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_EventBase_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_EventBase_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

