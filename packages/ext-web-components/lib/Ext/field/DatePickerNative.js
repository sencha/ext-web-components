import Ext_field_Date_Component from '../../Ext/field/Date';

export default class Ext_field_DatePickerNative_Component extends Ext_field_Date_Component {
//events
//configs

static XTYPE() {return 'datepickernativefield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_DatePickerNative_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_DatePickerNative_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_DatePickerNative_Component.METHODS(),
            Ext_field_DatePickerNative_Component.XTYPE(),
            Ext_field_DatePickerNative_Component.PROPERTIESOBJECT(),
            Ext_field_DatePickerNative_Component.EVENTS()
        )
        this.XTYPE = Ext_field_DatePickerNative_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_DatePickerNative_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_DatePickerNative_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_DatePickerNative_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
