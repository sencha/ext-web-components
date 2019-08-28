import Ext_draw_SurfaceBase_Component from '../../Ext/draw/SurfaceBase';

export default class Ext_draw_Surface_Component extends Ext_draw_SurfaceBase_Component {
//events
//configs

static XTYPE() {return 'surface'}
static PROPERTIESOBJECT() { return {
"background":["object"],
"dirty":["boolean"],
"flipRtlText":["boolean"],
"items":["array"],
"rect":["array"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'add',function: function(sprite) { return this.ext.add(sprite) } },
{ name:'applyItems',function: function(items) { return this.ext.applyItems(items) } },
{ name:'clear',function: function() { return this.ext.clear() } },
{ name:'clearTransform',function: function() { return this.ext.clearTransform() } },
{ name:'createItem',function: function(config) { return this.ext.createItem(config) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'flatten',function: function(size,surfaces) { return this.ext.flatten(size,surfaces) } },
{ name:'get',function: function(id) { return this.ext.get(id) } },
{ name:'getBBox',function: function(sprites,isWithoutTransform) { return this.ext.getBBox(sprites,isWithoutTransform) } },
{ name:'getEventXY',function: function(e) { return this.ext.getEventXY(e) } },
{ name:'getOwnerBody',function: function() { return this.ext.getOwnerBody() } },
{ name:'hitTest',function: function(point,options) { return this.ext.hitTest(point,options) } },
{ name:'hitTestEvent',function: function(event,options) { return this.ext.hitTestEvent(event,options) } },
{ name:'onAdd',function: function(sprite) { return this.ext.onAdd(sprite) } },
{ name:'orderByZIndex',function: function() { return this.ext.orderByZIndex() } },
{ name:'remove',function: function(sprite,isDestroy) { return this.ext.remove(sprite,isDestroy) } },
{ name:'removeAll',function: function(isDestroy) { return this.ext.removeAll(isDestroy) } },
{ name:'renderFrame',function: function() { return this.ext.renderFrame() } },
{ name:'renderSprite',function: function(sprite) { return this.ext.renderSprite(sprite) } },
{ name:'repaint',function: function() { return this.ext.repaint() } },
{ name:'resetTransform',function: function() { return this.ext.resetTransform() } },
{ name:'roundPixel',function: function(num) { return this.ext.roundPixel(num) } },
{ name:'waitFor',function: function(surface) { return this.ext.waitFor(surface) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_draw_Surface_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_Surface_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_draw_Surface_Component.METHODS(),
            Ext_draw_Surface_Component.XTYPE(),
            Ext_draw_Surface_Component.PROPERTIESOBJECT(),
            Ext_draw_Surface_Component.EVENTS()
        )
        this.XTYPE = Ext_draw_Surface_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_Surface_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_draw_Surface_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_draw_Surface_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
