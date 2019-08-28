import Ext_calendar_form_Form_Component from '../../../Ext/calendar/form/Form';

export default class Ext_calendar_form_Add_Component extends Ext_calendar_form_Form_Component {
//events
//configs

static XTYPE() {return 'calendar-form-add'}
static PROPERTIESOBJECT() { return {
"title":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_calendar_form_Add_Component.METHODS(),
        Ext_calendar_form_Add_Component.XTYPE(),
        Ext_calendar_form_Add_Component.PROPERTIESOBJECT(),
        Ext_calendar_form_Add_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_form_Add_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_Add_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_form_Add_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_form_Add_Component.EVENTS());
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
    window.customElements.define('ext-calendar-form-add', Ext_calendar_form_Add_Component);
  });
})();

