import Ext_Sheet_Component from '../Ext/Sheet';

export default class Ext_Picker_Component extends Ext_Sheet_Component {
//events
get oncancel(){return this.getAttribute('oncancel')};set oncancel(oncancel){this.setAttribute('oncancel',oncancel)}
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onpick(){return this.getAttribute('onpick')};set onpick(onpick){this.setAttribute('onpick',onpick)}
//configs

static XTYPE() {return 'picker'}
static PROPERTIESOBJECT() { return {
"bottom":["number","string"],
"cancelButton":["string","mixed"],
"centered":["any"],
"defaultType":["any"],
"doneButton":["string","mixed"],
"floated":["boolean"],
"height":["number"],
"layout":["object","string"],
"left":["number","string"],
"right":["number","string"],
"side":["'left'","'right'","'top'","'bottom'"],
"slots":["array"],
"tabIndex":["number"],
"toolbar":["Ext.TitleBar","Ext.Toolbar","object"],
"useTitles":["boolean"],
"value":["object"],
}}
static EVENTS() { return [
{name:'cancel',parameters:'undefined'},
{name:'change',parameters:'undefined,values'},
{name:'pick',parameters:'undefined,values,slot'},
]}
static METHODS() { return [
{ name:'applyCancelButton',function: function(config,oldButton) { return this.ext.applyCancelButton(config,oldButton) } },
{ name:'applyDoneButton',function: function(config,oldButton) { return this.ext.applyDoneButton(config,oldButton) } },
{ name:'applyToolbar',function: function(config,oldToolbar) { return this.ext.applyToolbar(config,oldToolbar) } },
{ name:'getValue',function: function(useDom) { return this.ext.getValue(useDom) } },
{ name:'getValues',function: function() { return this.ext.getValues() } },
{ name:'onCancelButtonTap',function: function() { return this.ext.onCancelButtonTap() } },
{ name:'onDoneButtonTap',function: function() { return this.ext.onDoneButtonTap() } },
{ name:'onSlotPick',function: function(slot) { return this.ext.onSlotPick(slot) } },
{ name:'setValue',function: function(values,animated) { return this.ext.setValue(values,animated) } },
{ name:'updateSlots',function: function(newSlots) { return this.ext.updateSlots(newSlots) } },
{ name:'updateToolbar',function: function(newToolbar) { return this.ext.updateToolbar(newToolbar) } },
{ name:'updateUseTitles',function: function(useTitles) { return this.ext.updateUseTitles(useTitles) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Picker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Picker_Component.METHODS(),
            Ext_Picker_Component.XTYPE(),
            Ext_Picker_Component.PROPERTIESOBJECT(),
            Ext_Picker_Component.EVENTS()
        )
        this.XTYPE = Ext_Picker_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Picker_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Picker_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Picker_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
