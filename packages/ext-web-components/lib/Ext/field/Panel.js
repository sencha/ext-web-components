import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_field_Panel_Component extends Ext_Panel_Component {
//events
get onexception(){return this.getAttribute('onexception')};set onexception(onexception){this.setAttribute('onexception',onexception)}
//configs

static XTYPE() {return 'fieldpanel'}
static PROPERTIESOBJECT() { return {
"api":["object"],
"baseParams":["object"],
"nameable":["boolean"],
"nameHolder":["boolean"],
"paramOrder":["string","string[]"],
"paramsAsHash":["boolean"],
"scrollable":["boolean","string","object"],
"shareableName":["boolean"],
"timeout":["number"],
"url":["string"],
}}
static EVENTS() { return [
{name:'exception',parameters:'undefined,result'},
]}
static METHODS() { return [
{ name:'getParams',function: function(params) { return this.ext.getParams(params) } },
{ name:'load',function: function(options) { return this.ext.load(options) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Panel_Component.METHODS(),
            Ext_field_Panel_Component.XTYPE(),
            Ext_field_Panel_Component.PROPERTIESOBJECT(),
            Ext_field_Panel_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Panel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Panel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Panel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Panel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
