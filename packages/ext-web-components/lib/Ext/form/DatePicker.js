import Ext_field_Picker_Component from '../../Ext/field/Picker';

export default class Ext_form_DatePicker_Component extends Ext_field_Picker_Component {
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

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_DatePicker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_DatePicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_form_DatePicker_Component.METHODS(),
            Ext_form_DatePicker_Component.XTYPE(),
            Ext_form_DatePicker_Component.PROPERTIESOBJECT(),
            Ext_form_DatePicker_Component.EVENTS()
        )
        this.XTYPE = Ext_form_DatePicker_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_DatePicker_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_form_DatePicker_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_form_DatePicker_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
