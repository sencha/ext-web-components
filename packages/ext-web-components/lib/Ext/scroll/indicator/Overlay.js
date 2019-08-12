import Ext_scroll_indicator_Indicator_Component from '../../../Ext/scroll/indicator/Indicator';

export default class Ext_scroll_indicator_Overlay_Component extends Ext_scroll_indicator_Indicator_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"axis":["'x'","'y'"],
"hideAnimation":["boolean","object"],
"hideDelay":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'cacheStyles',function: function() { return this.ext.cacheStyles() } },
{ name:'hasOpposite',function: function() { return this.ext.hasOpposite() } },
{ name:'hide',function: function() { return this.ext.hide() } },
{ name:'show',function: function() { return this.ext.show() } },
{ name:'updateValue',function: function(value) { return this.ext.updateValue(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_scroll_indicator_Overlay_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_scroll_indicator_Overlay_Component.METHODS(),
            Ext_scroll_indicator_Overlay_Component.XTYPE(),
            Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT(),
            Ext_scroll_indicator_Overlay_Component.EVENTS()
        )
        this.XTYPE = Ext_scroll_indicator_Overlay_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_scroll_indicator_Overlay_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_scroll_indicator_Overlay_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
