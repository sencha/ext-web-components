import Ext_field_FieldGroupContainer_Component from '../../Ext/field/FieldGroupContainer';

export default class Ext_field_RadioGroup_Component extends Ext_field_FieldGroupContainer_Component {
//events
//configs

static XTYPE() {return 'radiogroup'}
static PROPERTIESOBJECT() { return {
"simpleValue":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getChecked',function: function(query) { return this.ext.getChecked(query) } },
{ name:'setValue',function: function(value) { return this.ext.setValue(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_RadioGroup_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_RadioGroup_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_RadioGroup_Component.METHODS(),
            Ext_field_RadioGroup_Component.XTYPE(),
            Ext_field_RadioGroup_Component.PROPERTIESOBJECT(),
            Ext_field_RadioGroup_Component.EVENTS()
        )
        this.XTYPE = Ext_field_RadioGroup_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_RadioGroup_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_RadioGroup_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_RadioGroup_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
