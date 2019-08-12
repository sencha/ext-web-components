import Ext_field_Checkbox_Component from '../../Ext/field/Checkbox';

export default class Ext_field_Radio_Component extends Ext_field_Checkbox_Component {
//events
//configs

static XTYPE() {return 'radio'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getGroupValue',function: function() { return this.ext.getGroupValue() } },
{ name:'getSameGroupFields',function: function() { return this.ext.getSameGroupFields() } },
{ name:'refreshGroupValues',function: function(trigger) { return this.ext.refreshGroupValues(trigger) } },
{ name:'setGroupValue',function: function(value) { return this.ext.setGroupValue(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Radio_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Radio_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Radio_Component.METHODS(),
            Ext_field_Radio_Component.XTYPE(),
            Ext_field_Radio_Component.PROPERTIESOBJECT(),
            Ext_field_Radio_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Radio_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Radio_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Radio_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Radio_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
