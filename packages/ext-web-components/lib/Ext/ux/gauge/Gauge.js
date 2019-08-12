import Ext_Gadget_Component from '../../../Ext/Gadget';

export default class Ext_ux_gauge_Gauge_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return 'gauge'}
static PROPERTIESOBJECT() { return {
"angleOffset":["number"],
"animation":["object","boolean"],
"clockwise":["boolean"],
"maxValue":["number"],
"minValue":["number"],
"needle":["Ext.ux.gauge.needle.Abstract"],
"padding":["number","string"],
"textAlign":["string"],
"textOffset":["object"],
"textTpl":["Ext.XTemplate"],
"trackLength":["number"],
"trackStart":["number"],
"trackStyle":["object"],
"value":["number"],
"valueStyle":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'animate',function: function(from,to,duration,easing,fn,scope) { return this.ext.animate(from,to,duration,easing,fn,scope) } },
{ name:'camelToHyphen',function: function(name) { return this.ext.camelToHyphen(name) } },
{ name:'createInterpolator',function: function(rangeCheck) { return this.ext.createInterpolator(rangeCheck) } },
{ name:'fitSectorInPaddedRect',function: function(width,height,padding,startAngle,lengthAngle,ratio) { return this.ext.fitSectorInPaddedRect(width,height,padding,startAngle,lengthAngle,ratio) } },
{ name:'fitSectorInRect',function: function(width,height,startAngle,lengthAngle,ratio) { return this.ext.fitSectorInRect(width,height,startAngle,lengthAngle,ratio) } },
{ name:'getRadiusFn',function: function(radius) { return this.ext.getRadiusFn(radius) } },
{ name:'getUnitSectorExtrema',function: function(startAngle,lengthAngle) { return this.ext.getUnitSectorExtrema(startAngle,lengthAngle) } },
{ name:'normalizeAngle',function: function(angle) { return this.ext.normalizeAngle(angle) } },
{ name:'resizeGradients',function: function(size) { return this.ext.resizeGradients(size) } },
{ name:'setGradientSize',function: function(gradient,x1,y1,x2,y2) { return this.ext.setGradientSize(gradient,x1,y1,x2,y2) } },
{ name:'setGradientStops',function: function(gradient,stops) { return this.ext.setGradientStops(gradient,stops) } },
{ name:'stopAnimation',function: function() { return this.ext.stopAnimation() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_gauge_Gauge_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_gauge_Gauge_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ux_gauge_Gauge_Component.METHODS(),
            Ext_ux_gauge_Gauge_Component.XTYPE(),
            Ext_ux_gauge_Gauge_Component.PROPERTIESOBJECT(),
            Ext_ux_gauge_Gauge_Component.EVENTS()
        )
        this.XTYPE = Ext_ux_gauge_Gauge_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_gauge_Gauge_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ux_gauge_Gauge_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ux_gauge_Gauge_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
