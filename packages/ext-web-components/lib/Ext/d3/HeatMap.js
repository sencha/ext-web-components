import Ext_d3_svg_Svg_Component from '../../Ext/d3/svg/Svg';

export default class Ext_d3_HeatMap_Component extends Ext_d3_svg_Svg_Component {
//events
//configs

static XTYPE() {return 'd3-heatmap'}
static PROPERTIESOBJECT() { return {
"colorAxis":["Ext.d3.axis.Color"],
"labels":["object","boolean"],
"legend":["Ext.d3.legend.Color"],
"tiles":["object"],
"xAxis":["Ext.d3.axis.Data"],
"yAxis":["Ext.d3.axis.Data"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'setDomainFromData',function: function(items,field,scale,step) { return this.ext.setDomainFromData(items,field,scale,step) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_HeatMap_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_HeatMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_d3_HeatMap_Component.METHODS(),
            Ext_d3_HeatMap_Component.XTYPE(),
            Ext_d3_HeatMap_Component.PROPERTIESOBJECT(),
            Ext_d3_HeatMap_Component.EVENTS()
        )
        this.XTYPE = Ext_d3_HeatMap_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_HeatMap_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_d3_HeatMap_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_HeatMap_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
