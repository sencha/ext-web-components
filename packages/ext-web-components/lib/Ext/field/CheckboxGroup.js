import Ext_field_FieldGroupContainer_Component from '../../Ext/field/FieldGroupContainer';

export default class Ext_field_CheckboxGroup_Component extends Ext_field_FieldGroupContainer_Component {
//events
//configs

static XTYPE() {return 'checkboxgroup'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getValue',function: function() { return this.ext.getValue() } },
{ name:'setValue',function: function(value) { return this.ext.setValue(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_CheckboxGroup_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_CheckboxGroup_Component.METHODS(),
            Ext_field_CheckboxGroup_Component.XTYPE(),
            Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT(),
            Ext_field_CheckboxGroup_Component.EVENTS()
        )
        this.XTYPE = Ext_field_CheckboxGroup_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_CheckboxGroup_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_CheckboxGroup_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
