import Ext_field_SingleSlider_Component from '../../Ext/field/SingleSlider';

export default class Ext_field_Toggle_Component extends Ext_field_SingleSlider_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get ondrag(){return this.getAttribute('ondrag')};set ondrag(ondrag){this.setAttribute('ondrag',ondrag)}
get ondragend(){return this.getAttribute('ondragend')};set ondragend(ondragend){this.setAttribute('ondragend',ondragend)}
get ondragstart(){return this.getAttribute('ondragstart')};set ondragstart(ondragstart){this.setAttribute('ondragstart',ondragstart)}
//configs

static XTYPE() {return 'togglefield'}
static PROPERTIESOBJECT() { return {
"activeLabel":["string"],
"bodyAlign":["'start'","'center'","'end'","'stretch'"],
"inactiveLabel":["string"],
"publishes":["string","string[]","object"],
"slider":["any"],
"twoWayBindable":["string","string[]","object"],
"value":["number","number[]"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
{name:'drag',parameters:''},
{name:'dragend',parameters:''},
{name:'dragstart',parameters:''},
]}
static METHODS() { return [
{ name:'getRawValue',function: function() { return this.ext.getRawValue() } },
{ name:'toggle',function: function() { return this.ext.toggle() } },
{ name:'updateActiveLabel',function: function(newActiveLabel,oldActiveLabel) { return this.ext.updateActiveLabel(newActiveLabel,oldActiveLabel) } },
{ name:'updateInactiveLabel',function: function(newInactiveLabel,oldInactiveLabel) { return this.ext.updateInactiveLabel(newInactiveLabel,oldInactiveLabel) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Toggle_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Toggle_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Toggle_Component.METHODS(),
            Ext_field_Toggle_Component.XTYPE(),
            Ext_field_Toggle_Component.PROPERTIESOBJECT(),
            Ext_field_Toggle_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Toggle_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Toggle_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Toggle_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Toggle_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
