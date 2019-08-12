import Ext_Component_Component from '../Ext/Component';

export default class Ext_Decorator_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"component":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyComponent',function: function(config) { return this.ext.applyComponent(config) } },
{ name:'doSetComponent',function: function(component) { return this.ext.doSetComponent(component) } },
{ name:'doUnsetComponent',function: function(component) { return this.ext.doUnsetComponent(component) } },
{ name:'setDisabled',function: function(disabled) { return this.ext.setDisabled(disabled) } },
{ name:'updateComponent',function: function(newComponent,oldComponent) { return this.ext.updateComponent(newComponent,oldComponent) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Decorator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Decorator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Decorator_Component.METHODS(),
            Ext_Decorator_Component.XTYPE(),
            Ext_Decorator_Component.PROPERTIESOBJECT(),
            Ext_Decorator_Component.EVENTS()
        )
        this.XTYPE = Ext_Decorator_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Decorator_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Decorator_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Decorator_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
