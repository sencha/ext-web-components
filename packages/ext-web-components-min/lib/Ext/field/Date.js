import Ext_field_Picker_Component from '../../Ext/field/Picker';

export default class Ext_field_Date_Component extends Ext_field_Picker_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'datefield'}
static PROPERTIESOBJECT() { return {
"altFormats":["string","string[]"],
"dateFormat":["string"],
"destroyPickerOnHide":["boolean"],
"maxDate":["date","string"],
"minDate":["date","string"],
"value":["object","date"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newDate,oldDate'},
]}
static METHODS() { return [
{ name:'getFormattedValue',function: function(format) { return this.ext.getFormattedValue(format) } },
{ name:'onPickerChange',function: function(picker,value) { return this.ext.onPickerChange(picker,value) } },
{ name:'updateDateFormat',function: function() { return this.ext.updateDateFormat() } },
]}

constructor() {
    super (
        Ext_field_Date_Component.METHODS(),
        Ext_field_Date_Component.XTYPE(),
        Ext_field_Date_Component.PROPERTIESOBJECT(),
        Ext_field_Date_Component.EVENTS()
    )
    this.XTYPE = Ext_field_Date_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Date_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_Date_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Date_Component.EVENTS());
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
    window.customElements.define('ext-datefield', Ext_field_Date_Component);
  });
})();

