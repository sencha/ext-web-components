import Ext_field_trigger_Trigger_Component from '../../../Ext/field/trigger/Trigger';

export default class Ext_field_trigger_Clear_Component extends Ext_field_trigger_Trigger_Component {
//events
//configs

static XTYPE() {return 'cleartrigger'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_field_trigger_Clear_Component.METHODS(),
        Ext_field_trigger_Clear_Component.XTYPE(),
        Ext_field_trigger_Clear_Component.PROPERTIESOBJECT(),
        Ext_field_trigger_Clear_Component.EVENTS()
    )
    this.XTYPE = Ext_field_trigger_Clear_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Clear_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_trigger_Clear_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_trigger_Clear_Component.EVENTS());
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
    window.customElements.define('ext-cleartrigger', Ext_field_trigger_Clear_Component);
  });
})();

