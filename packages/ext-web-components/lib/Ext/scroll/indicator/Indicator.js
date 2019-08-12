import Ext_Widget_Component from '../../../Ext/Widget';

export default class Ext_scroll_indicator_Indicator_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"axis":["'x'","'y'"],
"enabled":["any"],
"scroller":["Ext.scroll.VirtualScroller"],
"value":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_scroll_indicator_Indicator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_scroll_indicator_Indicator_Component.METHODS(),
            Ext_scroll_indicator_Indicator_Component.XTYPE(),
            Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT(),
            Ext_scroll_indicator_Indicator_Component.EVENTS()
        )
        this.XTYPE = Ext_scroll_indicator_Indicator_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_scroll_indicator_Indicator_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_scroll_indicator_Indicator_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
