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

constructor() {
    super (
        Ext_calendar_Event_Component.METHODS(),
        Ext_calendar_Event_Component.XTYPE(),
        Ext_calendar_Event_Component.PROPERTIESOBJECT(),
        Ext_calendar_Event_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_Event_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_Event_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_Event_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_Event_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-calendar-event', Ext_calendar_Event_Component);
  });
})();

