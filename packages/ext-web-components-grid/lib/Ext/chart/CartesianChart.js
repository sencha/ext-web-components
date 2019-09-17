import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_CartesianChart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'cartesian'}
static PROPERTIESOBJECT() { return {
"flipXY":["boolean"],
"innerPadding":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_CartesianChart_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_CartesianChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_chart_CartesianChart_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_CartesianChart_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_chart_CartesianChart_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_chart_CartesianChart_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
