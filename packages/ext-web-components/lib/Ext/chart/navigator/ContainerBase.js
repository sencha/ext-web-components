import Ext_Container_Component from '../../../Ext/Container';

export default class Ext_chart_navigator_ContainerBase_Component extends Ext_Container_Component {
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
        for (var property in Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_navigator_ContainerBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_chart_navigator_ContainerBase_Component.METHODS(),
            Ext_chart_navigator_ContainerBase_Component.XTYPE(),
            Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT(),
            Ext_chart_navigator_ContainerBase_Component.EVENTS()
        )
        this.XTYPE = Ext_chart_navigator_ContainerBase_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_chart_navigator_ContainerBase_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_navigator_ContainerBase_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
