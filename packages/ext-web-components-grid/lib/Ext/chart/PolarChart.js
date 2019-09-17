import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_PolarChart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'polar'}
static PROPERTIESOBJECT() { return {
"center":["array"],
"innerPadding":["number"],
"radius":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_PolarChart_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_PolarChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_chart_PolarChart_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_PolarChart_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_chart_PolarChart_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_chart_PolarChart_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
