import Ext_Widget_Component from '../Ext/Widget';

export default class Ext_AbstractComponent_Component extends Ext_Widget_Component {
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
        for (var property in Ext_AbstractComponent_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_AbstractComponent_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_AbstractComponent_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_AbstractComponent_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_AbstractComponent_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_AbstractComponent_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
