import Ext_Gadget_Component from '../../../Ext/Gadget';

export default class Ext_ux_rating_Picker_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return 'rating'}
static PROPERTIESOBJECT() { return {
"animate":["boolean","object"],
"family":["string"],
"glyphs":["string","string[]","number[]"],
"limit":["number"],
"minimum":["number"],
"overStyle":["string","object"],
"rounding":["number"],
"scale":["string"],
"selectedStyle":["string","object"],
"tip":["object","string","string[]","Ext.XTemplate","function"],
"tooltipText":["string"],
"trackingValue":["number"],
"trackOver":["boolean"],
"value":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getGlyphTextNode',function: function(dom) { return this.ext.getGlyphTextNode(dom) } },
{ name:'refresh',function: function() { return this.ext.refresh() } },
{ name:'refreshGlyphs',function: function(now) { return this.ext.refreshGlyphs(now) } },
{ name:'refreshTip',function: function(now) { return this.ext.refreshTip(now) } },
{ name:'valueFromEvent',function: function(event) { return this.ext.valueFromEvent(event) } },
{ name:'valueToPercent',function: function(value) { return this.ext.valueToPercent(value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_rating_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_ux_rating_Picker_Component.METHODS()),
            events.concat(Ext_ux_rating_Picker_Component.EVENTS())



            //events.concat(Ext_ux_rating_Picker_Component.EVENTS()),
            //propertiesobject.concat(Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_ux_rating_Picker_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_ux_rating_Picker_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_ux_rating_Picker_Component.METHODS())
        )
        //this.XTYPE = Ext_ux_rating_Picker_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_rating_Picker_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_ux_rating_Picker_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_ux_rating_Picker_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
