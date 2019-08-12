import Ext_Container_Component from '../../Ext/Container';

export default class Ext_button_Segmented_Component extends Ext_Container_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get ontoggle(){return this.getAttribute('ontoggle')};set ontoggle(ontoggle){this.setAttribute('ontoggle',ontoggle)}
//configs

static XTYPE() {return 'segmentedbutton'}
static PROPERTIESOBJECT() { return {
"allowDepress":["boolean"],
"allowMultiple":["boolean"],
"allowToggle":["boolean"],
"autoSize":["boolean"],
"defaults":["object"],
"defaultType":["string"],
"defaultUI":["string"],
"forceSelection":["boolean"],
"layout":["object","string"],
"pressedButtons":["array"],
"publishes":["string","string[]","object"],
"twoWayBindable":["string","string[]","object"],
"value":["string","number","string[]","number[]"],
"vertical":["boolean"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,value,oldValue'},
{name:'toggle',parameters:'undefined,button,isPressed'},
]}
static METHODS() { return [
{ name:'getButtonValue',function: function(button) { return this.ext.getButtonValue(button) } },
{ name:'isPressed',function: function(button) { return this.ext.isPressed(button) } },
{ name:'lookupButtonByValue',function: function(value) { return this.ext.lookupButtonByValue(value) } },
{ name:'onButtonHiddenChange',function: function() { return this.ext.onButtonHiddenChange() } },
{ name:'updateDisabled',function: function(disabled,oldDisabled) { return this.ext.updateDisabled(disabled,oldDisabled) } },
{ name:'updateFirstAndLastCls',function: function(items) { return this.ext.updateFirstAndLastCls(items) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_button_Segmented_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_button_Segmented_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_button_Segmented_Component.METHODS(),
            Ext_button_Segmented_Component.XTYPE(),
            Ext_button_Segmented_Component.PROPERTIESOBJECT(),
            Ext_button_Segmented_Component.EVENTS()
        )
        this.XTYPE = Ext_button_Segmented_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_button_Segmented_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_button_Segmented_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_button_Segmented_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
