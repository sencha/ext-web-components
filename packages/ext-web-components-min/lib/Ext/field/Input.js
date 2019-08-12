import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_field_Input_Component extends Ext_field_Field_Component {
//events
//configs

static XTYPE() {return 'inputfield'}
static PROPERTIESOBJECT() { return {
"inputType":["string"],
"inputValue":["any"],
"readOnly":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'setInputAttribute',function: function(attribute,newValue) { return this.ext.setInputAttribute(attribute,newValue) } },
]}

constructor() {
    super (
        Ext_field_Input_Component.METHODS(),
        Ext_field_Input_Component.XTYPE(),
        Ext_field_Input_Component.PROPERTIESOBJECT(),
        Ext_field_Input_Component.EVENTS()
    )
    this.XTYPE = Ext_field_Input_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Input_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_Input_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Input_Component.EVENTS());
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
    window.customElements.define('ext-inputfield', Ext_field_Input_Component);
  });
})();

