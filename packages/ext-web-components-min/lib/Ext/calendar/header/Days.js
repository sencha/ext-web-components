import Ext_calendar_header_Base_Component from '../../../Ext/calendar/header/Base';

export default class Ext_calendar_header_Days_Component extends Ext_calendar_header_Base_Component {
//events
//configs

static XTYPE() {return 'calendar-daysheader'}
static PROPERTIESOBJECT() { return {
"compactOptions":["object"],
"format":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_calendar_header_Days_Component.METHODS(),
        Ext_calendar_header_Days_Component.XTYPE(),
        Ext_calendar_header_Days_Component.PROPERTIESOBJECT(),
        Ext_calendar_header_Days_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_header_Days_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_header_Days_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_header_Days_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_header_Days_Component.EVENTS());
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
    window.customElements.define('ext-calendar-daysheader', Ext_calendar_header_Days_Component);
  });
})();

