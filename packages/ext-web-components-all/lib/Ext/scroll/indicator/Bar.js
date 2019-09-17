import Ext_scroll_indicator_Indicator_Component from '../../../Ext/scroll/indicator/Indicator';

export default class Ext_scroll_indicator_Bar_Component extends Ext_scroll_indicator_Indicator_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"stylesheet":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_scroll_indicator_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_scroll_indicator_Bar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_scroll_indicator_Bar_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_scroll_indicator_Bar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
