import Ext_sparkline_BarBase_Component from '../../Ext/sparkline/BarBase';

export default class Ext_sparkline_Bar_Component extends Ext_sparkline_BarBase_Component {
//events
//configs

static XTYPE() {return 'sparklinebar'}
static PROPERTIESOBJECT() { return {
"barColor":["string"],
"barSpacing":["number"],
"barWidth":["number"],
"chartRangeClip":["boolean"],
"chartRangeMax":["number"],
"chartRangeMin":["number"],
"colorMap":["object"],
"negBarColor":["string"],
"nullColor":["string"],
"stackedBarColor":["string[]"],
"tipTpl":["string","Ext.XTemplate"],
"zeroAxis":["boolean"],
"zeroColor":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Bar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_sparkline_Bar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Bar_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_sparkline_Bar_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_sparkline_Bar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
