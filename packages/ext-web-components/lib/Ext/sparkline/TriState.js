import Ext_sparkline_BarBase_Component from '../../Ext/sparkline/BarBase';

export default class Ext_sparkline_TriState_Component extends Ext_sparkline_BarBase_Component {
//events
//configs

static XTYPE() {return 'sparklinetristate'}
static PROPERTIESOBJECT() { return {
"barSpacing":["number"],
"barWidth":["number"],
"colorMap":["object"],
"negBarColor":["string"],
"posBarColor":["string"],
"zeroBarColor":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_TriState_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_TriState_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_sparkline_TriState_Component.METHODS(),
            Ext_sparkline_TriState_Component.XTYPE(),
            Ext_sparkline_TriState_Component.PROPERTIESOBJECT(),
            Ext_sparkline_TriState_Component.EVENTS()
        )
        this.XTYPE = Ext_sparkline_TriState_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_TriState_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_sparkline_TriState_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_sparkline_TriState_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
