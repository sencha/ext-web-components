import Ext_d3_HeatMap_Component from '../../../Ext/d3/HeatMap';

export default class Ext_pivot_d3_HeatMap_Component extends Ext_d3_HeatMap_Component {
//events
//configs

static XTYPE() {return 'pivotheatmap'}
static PROPERTIESOBJECT() { return {
"defaultFormatter":["string"],
"matrix":["Ext.pivot.matrix.Base"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_d3_HeatMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_pivot_d3_HeatMap_Component.METHODS(),
            Ext_pivot_d3_HeatMap_Component.XTYPE(),
            Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT(),
            Ext_pivot_d3_HeatMap_Component.EVENTS()
        )
        this.XTYPE = Ext_pivot_d3_HeatMap_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_pivot_d3_HeatMap_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_d3_HeatMap_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
