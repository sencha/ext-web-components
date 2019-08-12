import Ext_field_Date_Component from '../../Ext/field/Date';

export default class Ext_form_DatePickerNative_Component extends Ext_field_Date_Component {
//events
//configs

static XTYPE() {return 'datepickernativefield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_form_DatePickerNative_Component.METHODS(),
        Ext_form_DatePickerNative_Component.XTYPE(),
        Ext_form_DatePickerNative_Component.PROPERTIESOBJECT(),
        Ext_form_DatePickerNative_Component.EVENTS()
    )
    this.XTYPE = Ext_form_DatePickerNative_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_DatePickerNative_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_form_DatePickerNative_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_form_DatePickerNative_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

