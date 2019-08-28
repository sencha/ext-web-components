import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_form_Number_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'numberfield'}
static PROPERTIESOBJECT() { return {
"decimals":["number"],
"decimalSeparator":["string"],
"decimalsText":["string"],
"inputType":["string"],
"maxValue":["number"],
"maxValueText":["string"],
"minValue":["number"],
"minValueText":["string"],
"trim":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'syncDecimalValidator',function: function() { return this.ext.syncDecimalValidator() } },
]}

constructor() {
    super (
        Ext_form_Number_Component.METHODS(),
        Ext_form_Number_Component.XTYPE(),
        Ext_form_Number_Component.PROPERTIESOBJECT(),
        Ext_form_Number_Component.EVENTS()
    )
    this.XTYPE = Ext_form_Number_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Number_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_form_Number_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_form_Number_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

