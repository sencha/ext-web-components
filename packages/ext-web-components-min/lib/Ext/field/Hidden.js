import Ext_field_Input_Component from '../../Ext/field/Input';

export default class Ext_field_Hidden_Component extends Ext_field_Input_Component {
//events
//configs

static XTYPE() {return 'hiddenfield'}
static PROPERTIESOBJECT() { return {
"inputType":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_field_Hidden_Component.METHODS(),
        Ext_field_Hidden_Component.XTYPE(),
        Ext_field_Hidden_Component.PROPERTIESOBJECT(),
        Ext_field_Hidden_Component.EVENTS()
    )
    this.XTYPE = Ext_field_Hidden_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Hidden_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_Hidden_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Hidden_Component.EVENTS());
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
    window.customElements.define('ext-hiddenfield', Ext_field_Hidden_Component);
  });
})();

