import Ext_Component_Component from '../../Ext/Component';

export default class Ext_slider_Slider_Component extends Ext_Component_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get ondrag(){return this.getAttribute('ondrag')};set ondrag(ondrag){this.setAttribute('ondrag',ondrag)}
get ondragend(){return this.getAttribute('ondragend')};set ondragend(ondragend){this.setAttribute('ondragend',ondragend)}
get ondragstart(){return this.getAttribute('ondragstart')};set ondragstart(ondragstart){this.setAttribute('ondragstart',ondragstart)}
//configs

static XTYPE() {return 'slider'}
static PROPERTIESOBJECT() { return {
"allowThumbsOverlapping":["boolean"],
"animation":["boolean","object"],
"increment":["number"],
"maxValue":["number"],
"minValue":["number"],
"readOnly":["boolean"],
"thumbDefaults":["object"],
"value":["number","number[]"],
"valueIsArray":["boolean"],
"values":["number","number[]"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,thumb,newValue,oldValue'},
{name:'drag',parameters:'undefined,thumb,e'},
{name:'dragend',parameters:'undefined,thumb,value,e'},
{name:'dragstart',parameters:'undefined,thumb,value,e'},
]}
static METHODS() { return [
{ name:'applyIncrement',function: function(increment) { return this.ext.applyIncrement(increment) } },
{ name:'constrainValue',function: function(value) { return this.ext.constrainValue(value) } },
{ name:'factoryThumb',function: function() { return this.ext.factoryThumb() } },
{ name:'getArrayValues',function: function() { return this.ext.getArrayValues() } },
{ name:'getThumb',function: function(index) { return this.ext.getThumb(index) } },
{ name:'getThumbs',function: function() { return this.ext.getThumbs() } },
{ name:'getValues',function: function() { return this.ext.getValues() } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'onTap',function: function(e) { return this.ext.onTap(e) } },
{ name:'refreshAllThumbConstraints',function: function() { return this.ext.refreshAllThumbConstraints() } },
{ name:'refreshValue',function: function() { return this.ext.refreshValue() } },
{ name:'setValues',function: function(value) { return this.ext.setValues(value) } },
{ name:'updateAllowThumbsOverlapping',function: function(newValue,oldValue) { return this.ext.updateAllowThumbsOverlapping(newValue,oldValue) } },
{ name:'updateIncrement',function: function(newValue,oldValue) { return this.ext.updateIncrement(newValue,oldValue) } },
{ name:'updateMaxValue',function: function(newValue,oldValue) { return this.ext.updateMaxValue(newValue,oldValue) } },
{ name:'updateMinValue',function: function(newValue,oldValue) { return this.ext.updateMinValue(newValue,oldValue) } },
{ name:'updateThumbs',function: function(newThumbs) { return this.ext.updateThumbs(newThumbs) } },
{ name:'updateValue',function: function() { return this.ext.updateValue() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_slider_Slider_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_slider_Slider_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_slider_Slider_Component.METHODS(),
            Ext_slider_Slider_Component.XTYPE(),
            Ext_slider_Slider_Component.PROPERTIESOBJECT(),
            Ext_slider_Slider_Component.EVENTS()
        )
        this.XTYPE = Ext_slider_Slider_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_slider_Slider_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_slider_Slider_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_slider_Slider_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
