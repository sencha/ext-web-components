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

constructor() {
    super (
        Ext_calendar_panel_Day_Component.METHODS(),
        Ext_calendar_panel_Day_Component.XTYPE(),
        Ext_calendar_panel_Day_Component.PROPERTIESOBJECT(),
        Ext_calendar_panel_Day_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_panel_Day_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Day_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Day_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Day_Component.EVENTS());
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
    window.customElements.define('ext-calendar-day', Ext_calendar_panel_Day_Component);
  });
})();
