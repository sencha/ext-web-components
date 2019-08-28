import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_panel_Time_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'timepanel'}
static PROPERTIESOBJECT() { return {
"alignPMInside":["boolean"],
"autoAdvance":["boolean"],
"buttonAlign":["string"],
"confirmable":["boolean"],
"declineHandler":["function"],
"defaultButtons":["object"],
"handler":["function"],
"hourDisplayFormat":["string"],
"meridiem":["boolean"],
"mode":["string"],
"scope":["object"],
"value":["date"],
"vertical":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_panel_Time_Component.METHODS(),
        Ext_panel_Time_Component.XTYPE(),
        Ext_panel_Time_Component.PROPERTIESOBJECT(),
        Ext_panel_Time_Component.EVENTS()
    )
    this.XTYPE = Ext_panel_Time_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Time_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_panel_Time_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_Time_Component.EVENTS());
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
    window.customElements.define('ext-timepanel', Ext_panel_Time_Component);
  });
})();

