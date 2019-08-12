import Ext_Base_Component from '../Ext/Base';

export default class Ext_Evented_Component extends Ext_Base_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Evented_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Evented_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Evented_Component.METHODS(),
            Ext_Evented_Component.XTYPE(),
            Ext_Evented_Component.PROPERTIESOBJECT(),
            Ext_Evented_Component.EVENTS()
        )
        this.XTYPE = Ext_Evented_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Evented_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Evented_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Evented_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
