import Ext_Media_Component from '../Ext/Media';

export default class Ext_Audio_Component extends Ext_Media_Component {
//events
//configs

static XTYPE() {return 'audio'}
static PROPERTIESOBJECT() { return {
"cls":["string","string[]"],
"url":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'onActivate',function: function() { return this.ext.onActivate() } },
{ name:'onDeactivate',function: function() { return this.ext.onDeactivate() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Audio_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Audio_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Audio_Component.METHODS(),
            Ext_Audio_Component.XTYPE(),
            Ext_Audio_Component.PROPERTIESOBJECT(),
            Ext_Audio_Component.EVENTS()
        )
        this.XTYPE = Ext_Audio_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Audio_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Audio_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Audio_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
