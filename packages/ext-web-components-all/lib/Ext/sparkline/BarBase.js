import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_BarBase_Component extends Ext_sparkline_Base_Component {
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
        for (var property in Ext_sparkline_BarBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_BarBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_sparkline_BarBase_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_BarBase_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_sparkline_BarBase_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_sparkline_BarBase_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
