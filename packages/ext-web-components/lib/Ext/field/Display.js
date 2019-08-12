import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_field_Display_Component extends Ext_field_Field_Component {
//events
//configs

static XTYPE() {return 'displayfield'}
static PROPERTIESOBJECT() { return {
"encodeHtml":["boolean"],
"focusable":["boolean"],
"readOnly":["boolean"],
"renderer":["function","string"],
"scope":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getBodyTemplate',function: function() { return this.ext.getBodyTemplate() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Display_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Display_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Display_Component.METHODS(),
            Ext_field_Display_Component.XTYPE(),
            Ext_field_Display_Component.PROPERTIESOBJECT(),
            Ext_field_Display_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Display_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Display_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Display_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Display_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
