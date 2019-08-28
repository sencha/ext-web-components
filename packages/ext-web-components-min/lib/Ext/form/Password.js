import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_form_Password_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'passwordfield'}
static PROPERTIESOBJECT() { return {
"autoCapitalize":["boolean"],
"inputType":["string"],
"revealable":["boolean"],
"revealed":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'doRevealTap',function: function(me,e) { return this.ext.doRevealTap(me,e) } },
]}

constructor() {
    super (
        Ext_form_Password_Component.METHODS(),
        Ext_form_Password_Component.XTYPE(),
        Ext_form_Password_Component.PROPERTIESOBJECT(),
        Ext_form_Password_Component.EVENTS()
    )
    this.XTYPE = Ext_form_Password_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Password_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_form_Password_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_form_Password_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

