import Ext_Component_Component from '../../Ext/Component';

export default class Ext_panel_Tool_Component extends Ext_Component_Component {
//events
get onclick(){return this.getAttribute('onclick')};set onclick(onclick){this.setAttribute('onclick',onclick)}
//configs

static XTYPE() {return 'tool'}
static PROPERTIESOBJECT() { return {
"handler":["function","string"],
"iconCls":["string"],
"passive":["boolean"],
"scope":["object"],
"stopEvent":["boolean"],
"toolOwner":["Ext.Component"],
"type":["string"],
}}
static EVENTS() { return [
{name:'click',parameters:'undefined,e,owner'},
]}
static METHODS() { return [
{ name:'onClick',function: function(ev) { return this.ext.onClick(ev) } },
{ name:'onMouseDown',function: function(e) { return this.ext.onMouseDown(e) } },
{ name:'onMouseOut',function: function() { return this.ext.onMouseOut() } },
{ name:'onMouseOver',function: function() { return this.ext.onMouseOver() } },
{ name:'onRelease',function: function() { return this.ext.onRelease() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Tool_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Tool_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_panel_Tool_Component.METHODS(),
            Ext_panel_Tool_Component.XTYPE(),
            Ext_panel_Tool_Component.PROPERTIESOBJECT(),
            Ext_panel_Tool_Component.EVENTS()
        )
        this.XTYPE = Ext_panel_Tool_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Tool_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_panel_Tool_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_Tool_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
