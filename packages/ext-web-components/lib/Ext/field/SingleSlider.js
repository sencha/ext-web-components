import Ext_field_Slider_Component from '../../Ext/field/Slider';

export default class Ext_field_SingleSlider_Component extends Ext_field_Slider_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get ondrag(){return this.getAttribute('ondrag')};set ondrag(ondrag){this.setAttribute('ondrag',ondrag)}
get ondragchange(){return this.getAttribute('ondragchange')};set ondragchange(ondragchange){this.setAttribute('ondragchange',ondragchange)}
get ondragend(){return this.getAttribute('ondragend')};set ondragend(ondragend){this.setAttribute('ondragend',ondragend)}
get ondragstart(){return this.getAttribute('ondragstart')};set ondragstart(ondragstart){this.setAttribute('ondragstart',ondragstart)}
//configs

static XTYPE() {return 'singlesliderfield'}
static PROPERTIESOBJECT() { return {
"publishes":["string","string[]","object"],
"twoWayBindable":["string","string[]","object"],
"value":["number","number[]"],
}}
static EVENTS() { return [
{name:'change',parameters:'me,newValue,oldValue'},
{name:'drag',parameters:'undefined,sl,thumb,e'},
{name:'dragchange',parameters:'me,sl,newValue,oldValue'},
{name:'dragend',parameters:'undefined,sl,thumb,value,e'},
{name:'dragstart',parameters:'undefined,sl,thumb,value,e'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_SingleSlider_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_SingleSlider_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_SingleSlider_Component.METHODS(),
            Ext_field_SingleSlider_Component.XTYPE(),
            Ext_field_SingleSlider_Component.PROPERTIESOBJECT(),
            Ext_field_SingleSlider_Component.EVENTS()
        )
        this.XTYPE = Ext_field_SingleSlider_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_SingleSlider_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_SingleSlider_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_SingleSlider_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
