import Ext_Container_Component from '../Ext/Container';

export default class Ext_Carousel_Component extends Ext_Container_Component {
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
        for (var property in Ext_Carousel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Carousel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Carousel_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Carousel_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Carousel_Component.METHODS()),
            events.concat(Ext_Carousel_Component.EVENTS())



            //events.concat(Ext_Carousel_Component.EVENTS()),
            //propertiesobject.concat(Ext_Carousel_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Carousel_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Carousel_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Carousel_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Carousel_Component.METHODS())
        )
        //this.XTYPE = Ext_Carousel_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Carousel_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Carousel_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Carousel_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
