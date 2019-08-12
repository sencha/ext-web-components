import Ext_Media_Component from '../Ext/Media';

export default class Ext_Video_Component extends Ext_Media_Component {
//events
//configs

static XTYPE() {return 'video'}
static PROPERTIESOBJECT() { return {
"posterUrl":["string"],
"showPosterOnPause":["boolean"],
"url":["string","array"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'onGhostTap',function: function() { return this.ext.onGhostTap() } },
{ name:'onPause',function: function(e) { return this.ext.onPause(e) } },
{ name:'onPlay',function: function(e) { return this.ext.onPlay(e) } },
{ name:'updatePosterUrl',function: function(newUrl) { return this.ext.updatePosterUrl(newUrl) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Video_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Video_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Video_Component.METHODS(),
            Ext_Video_Component.XTYPE(),
            Ext_Video_Component.PROPERTIESOBJECT(),
            Ext_Video_Component.EVENTS()
        )
        this.XTYPE = Ext_Video_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Video_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Video_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Video_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
