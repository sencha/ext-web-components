import Ext_Gadget_Component from '../../Ext/Gadget';

export default class Ext_sparkline_Base_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return 'sparkline'}
static PROPERTIESOBJECT() { return {
"disableTooltips":["boolean"],
"highlightColor":["string"],
"highlightLighten":["number"],
"lineColor":["string"],
"tipTpl":["string","Ext.XTemplate"],
"tooltipPrefix":["string"],
"tooltipSkipNull":["boolean"],
"tooltipSuffix":["string"],
"values":["number[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getRegion',function: function() { return this.ext.getRegion() } },
{ name:'getRegionTooltip',function: function(region) { return this.ext.getRegionTooltip(region) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_sparkline_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Base_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_sparkline_Base_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_sparkline_Base_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
