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
            
        )
        this.XTYPE = Ext_pivot_d3_HeatMap_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_pivot_d3_HeatMap_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_pivot_d3_HeatMap_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
