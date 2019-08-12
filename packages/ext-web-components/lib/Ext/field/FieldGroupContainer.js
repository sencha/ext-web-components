import Ext_field_Container_Component from '../../Ext/field/Container';

export default class Ext_field_FieldGroupContainer_Component extends Ext_field_Container_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'groupcontainer'}
static PROPERTIESOBJECT() { return {
"defaultFieldValue":["mixed"],
"delegate":["string"],
"fieldsName":["string"],
"shareableName":["boolean"],
"vertical":["boolean"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
]}
static METHODS() { return [
{ name:'getGroupItems',function: function(query) { return this.ext.getGroupItems(query) } },
{ name:'getValue',function: function(enabled,all) { return this.ext.getValue(enabled,all) } },
{ name:'isEqual',function: function(value1,value2) { return this.ext.isEqual(value1,value2) } },
{ name:'isValid',function: function() { return this.ext.isValid() } },
{ name:'setValue',function: function(value) { return this.ext.setValue(value) } },
{ name:'updateFieldsName',function: function(name,oldName) { return this.ext.updateFieldsName(name,oldName) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_FieldGroupContainer_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_FieldGroupContainer_Component.METHODS(),
            Ext_field_FieldGroupContainer_Component.XTYPE(),
            Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT(),
            Ext_field_FieldGroupContainer_Component.EVENTS()
        )
        this.XTYPE = Ext_field_FieldGroupContainer_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_FieldGroupContainer_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_FieldGroupContainer_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
