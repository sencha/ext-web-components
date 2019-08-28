import Ext_Container_Component from '../Ext/Container';

export default class Ext_Toolbar_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'toolbar'}
static PROPERTIESOBJECT() { return {
"defaultButtonUI":["string"],
"defaultType":["string"],
"docked":["string"],
"layout":["object","string"],
"minHeight":["number","string"],
"title":["string","Ext.Title"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyTitle',function: function(title) { return this.ext.applyTitle(title) } },
{ name:'getTitle',function: function() { return this.ext.getTitle() } },
{ name:'hideTitle',function: function() { return this.ext.hideTitle() } },
{ name:'setTitle',function: function(title) { return this.ext.setTitle(title) } },
{ name:'showTitle',function: function() { return this.ext.showTitle() } },
{ name:'updateTitle',function: function(newTitle,oldTitle) { return this.ext.updateTitle(newTitle,oldTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Toolbar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Toolbar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Toolbar_Component.METHODS(),
            Ext_Toolbar_Component.XTYPE(),
            Ext_Toolbar_Component.PROPERTIESOBJECT(),
            Ext_Toolbar_Component.EVENTS()
        )
        this.XTYPE = Ext_Toolbar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Toolbar_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Toolbar_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Toolbar_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
