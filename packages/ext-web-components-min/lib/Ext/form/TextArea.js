import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_form_TextArea_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'textareafield'}
static PROPERTIESOBJECT() { return {
"autoCapitalize":["boolean"],
"clearable":["boolean"],
"maxRows":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_form_TextArea_Component.METHODS(),
        Ext_form_TextArea_Component.XTYPE(),
        Ext_form_TextArea_Component.PROPERTIESOBJECT(),
        Ext_form_TextArea_Component.EVENTS()
    )
    this.XTYPE = Ext_form_TextArea_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_TextArea_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_form_TextArea_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_form_TextArea_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

