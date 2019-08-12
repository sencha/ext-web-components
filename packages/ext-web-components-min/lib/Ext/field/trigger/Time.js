import Ext_field_trigger_Expand_Component from '../../../Ext/field/trigger/Expand';

export default class Ext_field_trigger_Time_Component extends Ext_field_trigger_Expand_Component {
//events
//configs

static XTYPE() {return 'timetrigger'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_field_trigger_Time_Component.METHODS(),
        Ext_field_trigger_Time_Component.XTYPE(),
        Ext_field_trigger_Time_Component.PROPERTIESOBJECT(),
        Ext_field_trigger_Time_Component.EVENTS()
    )
    this.XTYPE = Ext_field_trigger_Time_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Time_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_trigger_Time_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_trigger_Time_Component.EVENTS());
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
    window.customElements.define('ext-timetrigger', Ext_field_trigger_Time_Component);
  });
})();

