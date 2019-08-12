import Ext_draw_Surface_Component from '../../../Ext/draw/Surface';

export default class Ext_draw_engine_Svg_Component extends Ext_draw_Surface_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"highPrecision":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'clear',function: function() { return this.ext.clear() } },
{ name:'clearTransform',function: function() { return this.ext.clearTransform() } },
{ name:'createSvgNode',function: function(type) { return this.ext.createSvgNode(type) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'getNextDef',function: function(tagName) { return this.ext.getNextDef(tagName) } },
{ name:'getSvgElement',function: function(group,tag,position) { return this.ext.getSvgElement(group,tag,position) } },
{ name:'renderSprite',function: function(sprite) { return this.ext.renderSprite(sprite) } },
{ name:'serializeNode',function: function(node) { return this.ext.serializeNode(node) } },
{ name:'setElementAttributes',function: function(element,attributes) { return this.ext.setElementAttributes(element,attributes) } },
{ name:'toSVG',function: function(size,surfaces) { return this.ext.toSVG(size,surfaces) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_draw_engine_Svg_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_engine_Svg_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_draw_engine_Svg_Component.METHODS(),
            Ext_draw_engine_Svg_Component.XTYPE(),
            Ext_draw_engine_Svg_Component.PROPERTIESOBJECT(),
            Ext_draw_engine_Svg_Component.EVENTS()
        )
        this.XTYPE = Ext_draw_engine_Svg_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_engine_Svg_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_draw_engine_Svg_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_draw_engine_Svg_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
