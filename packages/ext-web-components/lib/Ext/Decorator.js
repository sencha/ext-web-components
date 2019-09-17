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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Decorator_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Decorator_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Decorator_Component.METHODS()),
            events.concat(Ext_Decorator_Component.EVENTS())



            //events.concat(Ext_Decorator_Component.EVENTS()),
            //propertiesobject.concat(Ext_Decorator_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Decorator_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Decorator_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Decorator_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Decorator_Component.METHODS())
        )
        //this.XTYPE = Ext_Decorator_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Decorator_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Decorator_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Decorator_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
