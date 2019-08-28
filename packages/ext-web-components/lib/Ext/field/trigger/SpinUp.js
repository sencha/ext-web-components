import Ext_field_trigger_Trigger_Component from '../../../Ext/field/trigger/Trigger';

export default class Ext_field_trigger_SpinUp_Component extends Ext_field_trigger_Trigger_Component {
//events
//configs

static XTYPE() {return 'spinuptrigger'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_trigger_SpinUp_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_trigger_SpinUp_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_trigger_SpinUp_Component.METHODS(),
            Ext_field_trigger_SpinUp_Component.XTYPE(),
            Ext_field_trigger_SpinUp_Component.PROPERTIESOBJECT(),
            Ext_field_trigger_SpinUp_Component.EVENTS()
        )
        this.XTYPE = Ext_field_trigger_SpinUp_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_SpinUp_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_trigger_SpinUp_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_trigger_SpinUp_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
