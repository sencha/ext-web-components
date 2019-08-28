import Ext_draw_Surface_Component from '../../../Ext/draw/Surface';

export default class Ext_draw_engine_Canvas_Component extends Ext_draw_Surface_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"highPrecision":["boolean"],
"precisionOverrides":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'appendPath',function: function(path) { return this.ext.appendPath(path) } },
{ name:'arc',function: function(x,y,radius,startAngle,endAngle,anticlockwise) { return this.ext.arc(x,y,radius,startAngle,endAngle,anticlockwise) } },
{ name:'arcTo',function: function(x1,y1,x2,y2,radius) { return this.ext.arcTo(x1,y1,x2,y2,radius) } },
{ name:'bezierCurveTo',function: function(c1x,c1y,c2x,c2y,x,y) { return this.ext.bezierCurveTo(c1x,c1y,c2x,c2y,x,y) } },
{ name:'clear',function: function() { return this.ext.clear() } },
{ name:'clearRect',function: function(x,y,w,h) { return this.ext.clearRect(x,y,w,h) } },
{ name:'clearTransform',function: function() { return this.ext.clearTransform() } },
{ name:'createCanvas',function: function() { return this.ext.createCanvas() } },
{ name:'createLinearGradient',function: function(x0,y0,x1,y1) { return this.ext.createLinearGradient(x0,y0,x1,y1) } },
{ name:'createRadialGradient',function: function(x0,y0,r0,x1,y1,r1) { return this.ext.createRadialGradient(x0,y0,r0,x1,y1,r1) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'disablePrecisionCompensation',function: function(ctx) { return this.ext.disablePrecisionCompensation(ctx) } },
{ name:'drawImage',function: function(img_elem,arg1,arg2,arg3,arg4,dst_x,dst_y,dw,dh) { return this.ext.drawImage(img_elem,arg1,arg2,arg3,arg4,dst_x,dst_y,dw,dh) } },
{ name:'ellipse',function: function(cx,cy,rx,ry,rotation,start,end,anticlockwise) { return this.ext.ellipse(cx,cy,rx,ry,rotation,start,end,anticlockwise) } },
{ name:'enablePrecisionCompensation',function: function(ctx) { return this.ext.enablePrecisionCompensation(ctx) } },
{ name:'fill',function: function() { return this.ext.fill() } },
{ name:'fill',function: function() { return this.ext.fill() } },
{ name:'fillRect',function: function(x,y,w,h) { return this.ext.fillRect(x,y,w,h) } },
{ name:'fillStroke',function: function(attr,transformFillStroke) { return this.ext.fillStroke(attr,transformFillStroke) } },
{ name:'fillText',function: function(text,x,y,maxWidth) { return this.ext.fillText(text,x,y,maxWidth) } },
{ name:'lineTo',function: function(x,y) { return this.ext.lineTo(x,y) } },
{ name:'moveTo',function: function(x,y) { return this.ext.moveTo(x,y) } },
{ name:'quadraticCurveTo',function: function(cx,cy,x,y) { return this.ext.quadraticCurveTo(cx,cy,x,y) } },
{ name:'rect',function: function(x,y,w,h) { return this.ext.rect(x,y,w,h) } },
{ name:'renderSprite',function: function(sprite) { return this.ext.renderSprite(sprite) } },
{ name:'restore',function: function() { return this.ext.restore() } },
{ name:'rotate',function: function(radians) { return this.ext.rotate(radians) } },
{ name:'save',function: function() { return this.ext.save() } },
{ name:'scale',function: function(sx,sy) { return this.ext.scale(sx,sy) } },
{ name:'setGradientBBox',function: function(bbox) { return this.ext.setGradientBBox(bbox) } },
{ name:'setLineDash',function: function(dashList) { return this.ext.setLineDash(dashList) } },
{ name:'setTransform',function: function(x2x,x2y,y2x,y2y,newDx,newDy) { return this.ext.setTransform(x2x,x2y,y2x,y2y,newDx,newDy) } },
{ name:'stroke',function: function() { return this.ext.stroke() } },
{ name:'stroke',function: function() { return this.ext.stroke() } },
{ name:'strokeRect',function: function(x,y,w,h) { return this.ext.strokeRect(x,y,w,h) } },
{ name:'strokeText',function: function(text,x,y,maxWidth) { return this.ext.strokeText(text,x,y,maxWidth) } },
{ name:'transform',function: function(x2x,x2y,y2x,y2y,newDx,newDy) { return this.ext.transform(x2x,x2y,y2x,y2y,newDx,newDy) } },
{ name:'translate',function: function(dx,dy) { return this.ext.translate(dx,dy) } },
{ name:'updatePrecisionCompensate',function: function() { return this.ext.updatePrecisionCompensate() } },
{ name:'updatePrecisionCompensateRect',function: function() { return this.ext.updatePrecisionCompensateRect() } },
{ name:'updateRect',function: function(rect) { return this.ext.updateRect(rect) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_engine_Canvas_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_draw_engine_Canvas_Component.METHODS(),
            Ext_draw_engine_Canvas_Component.XTYPE(),
            Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT(),
            Ext_draw_engine_Canvas_Component.EVENTS()
        )
        this.XTYPE = Ext_draw_engine_Canvas_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_draw_engine_Canvas_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_draw_engine_Canvas_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
