import Ext_field_Select_Component from '../../../Ext/field/Select';

export default class Ext_calendar_form_TimeField_Component extends Ext_field_Select_Component {
//events
//configs

static XTYPE() {return 'calendar-timefield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_calendar_form_TimeField_Component.METHODS(),
        Ext_calendar_form_TimeField_Component.XTYPE(),
        Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT(),
        Ext_calendar_form_TimeField_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_form_TimeField_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_form_TimeField_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_form_TimeField_Component.EVENTS());
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
    window.customElements.define('ext-calendar-timefield', Ext_calendar_form_TimeField_Component);
  });
})();

