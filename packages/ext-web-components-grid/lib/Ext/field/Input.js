import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_field_Input_Component extends Ext_field_Field_Component {
//events
//configs

static XTYPE() {return 'inputfield'}
static PROPERTIESOBJECT() { return {
"inputType":["string"],
"inputValue":["any"],
"readOnly":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'setInputAttribute',function: function(attribute,newValue) { return this.ext.setInputAttribute(attribute,newValue) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Input_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Input_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_field_Input_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Input_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_field_Input_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_field_Input_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}