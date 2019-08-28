import Ext_Container_Component from '../../Ext/Container';

export default class Ext_carousel_Carousel_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'carousel'}
static PROPERTIESOBJECT() { return {
"direction":["string"],
"draggable":["any"],
"indicator":["boolean","Ext.carousel.Indicator"],
"layout":["any"],
"ui":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyActiveItem',function: function(activeItem,oldActiveItem) { return this.ext.applyActiveItem(activeItem,oldActiveItem) } },
{ name:'applyIndicator',function: function(indicator,currentIndicator) { return this.ext.applyIndicator(indicator,currentIndicator) } },
{ name:'getActiveIndex',function: function() { return this.ext.getActiveIndex() } },
{ name:'getInnerItemAt',function: function(index) { return this.ext.getInnerItemAt(index) } },
{ name:'getInnerItemIndex',function: function(item) { return this.ext.getInnerItemIndex(item) } },
{ name:'getMaxItemIndex',function: function() { return this.ext.getMaxItemIndex() } },
{ name:'next',function: function() { return this.ext.next() } },
{ name:'previous',function: function() { return this.ext.previous() } },
{ name:'setOffset',function: function(offset) { return this.ext.setOffset(offset) } },
{ name:'setOffsetAnimated',function: function(offset) { return this.ext.setOffsetAnimated(offset) } },
{ name:'updateIndicator',function: function(indicator) { return this.ext.updateIndicator(indicator) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_carousel_Carousel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_carousel_Carousel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_carousel_Carousel_Component.METHODS(),
            Ext_carousel_Carousel_Component.XTYPE(),
            Ext_carousel_Carousel_Component.PROPERTIESOBJECT(),
            Ext_carousel_Carousel_Component.EVENTS()
        )
        this.XTYPE = Ext_carousel_Carousel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_carousel_Carousel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_carousel_Carousel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_carousel_Carousel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
