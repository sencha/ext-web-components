import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_Email_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'emailfield'}
static PROPERTIESOBJECT() { return {
"autoCapitalize":["boolean"],
"inputType":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_field_Email_Component.METHODS(),
        Ext_field_Email_Component.XTYPE(),
        Ext_field_Email_Component.PROPERTIESOBJECT(),
        Ext_field_Email_Component.EVENTS()
    )
    this.XTYPE = Ext_field_Email_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Email_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_Email_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Email_Component.EVENTS());
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
    window.customElements.define('ext-emailfield', Ext_field_Email_Component);
  });
})();

