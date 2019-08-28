import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_field_Slider_Component extends Ext_field_Field_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get ondrag(){return this.getAttribute('ondrag')};set ondrag(ondrag){this.setAttribute('ondrag',ondrag)}
get ondragchange(){return this.getAttribute('ondragchange')};set ondragchange(ondragchange){this.setAttribute('ondragchange',ondragchange)}
get ondragend(){return this.getAttribute('ondragend')};set ondragend(ondragend){this.setAttribute('ondragend',ondragend)}
get ondragstart(){return this.getAttribute('ondragstart')};set ondragstart(ondragstart){this.setAttribute('ondragstart',ondragstart)}
//configs

static XTYPE() {return 'sliderfield'}
static PROPERTIESOBJECT() { return {
"bodyAlign":["'start'","'center'","'end'","'stretch'"],
"increment":["number"],
"liveUpdate":["boolean"],
"maxValue":["number"],
"minValue":["number"],
"readOnly":["any"],
"slider":["any"],
"tabIndex":["number"],
"twoWayBindable":["string","string[]","object"],
"value":["number","number[]"],
"values":["number","number[]"],
}}
static EVENTS() { return [
{name:'change',parameters:'me,newValue,oldValue'},
{name:'drag',parameters:'undefined,sl,thumb,e'},
{name:'dragchange',parameters:'me,sl,thumb,newValue,oldValue'},
{name:'dragend',parameters:'undefined,sl,thumb,value,e'},
{name:'dragstart',parameters:'undefined,sl,thumb,value,e'},
]}
static METHODS() { return [
{ name:'getValues',function: function() { return this.ext.getValues() } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'setValues',function: function(value) { return this.ext.setValues(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Slider_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Slider_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Slider_Component.METHODS(),
            Ext_field_Slider_Component.XTYPE(),
            Ext_field_Slider_Component.PROPERTIESOBJECT(),
            Ext_field_Slider_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Slider_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Slider_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Slider_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Slider_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
