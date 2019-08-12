import Ext_Widget_Component from '../../../Ext/Widget';

export default class Ext_field_trigger_Base_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"field":["Ext.field.Text"],
"group":["string"],
"name":["string"],
"side":["'left'","'right'"],
"triggers":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_trigger_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_trigger_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_trigger_Base_Component.METHODS(),
            Ext_field_trigger_Base_Component.XTYPE(),
            Ext_field_trigger_Base_Component.PROPERTIESOBJECT(),
            Ext_field_trigger_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_field_trigger_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_trigger_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_trigger_Base_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
