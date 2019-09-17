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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_FieldGroupContainer_Component.METHODS()),
            events.concat(Ext_field_FieldGroupContainer_Component.EVENTS())



            //events.concat(Ext_field_FieldGroupContainer_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_FieldGroupContainer_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_FieldGroupContainer_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_FieldGroupContainer_Component.METHODS())
        )
        //this.XTYPE = Ext_field_FieldGroupContainer_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_FieldGroupContainer_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_FieldGroupContainer_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
