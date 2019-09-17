import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Box_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklinebox'}
static PROPERTIESOBJECT() { return {
"boxFillColor":["string"],
"boxLineColor":["string"],
"chartRangeMax":["number"],
"chartRangeMin":["number"],
"medianColor":["string"],
"outlierFillColor":["string"],
"outlierIQR":["number"],
"outlierLineColor":["string"],
"raw":["boolean"],
"showOutliers":["boolean"],
"spotRadius":["number"],
"target":["number"],
"targetColor":["string"],
"whiskerColor":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Box_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Box_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_sparkline_Box_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Box_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_sparkline_Box_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_sparkline_Box_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}