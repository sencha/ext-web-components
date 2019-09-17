import Ext_d3_ComponentBase_Component from '../../Ext/d3/ComponentBase';

export default class Ext_d3_Component_Component extends Ext_d3_ComponentBase_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"componentCls":["string"],
"interactions":["any"],
"store":["Ext.data.Store"],
"transitions":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'createTransition',function: function(name,selection) { return this.ext.createTransition(name,selection) } },
{ name:'hideMask',function: function() { return this.ext.hideMask() } },
{ name:'showMask',function: function(msg) { return this.ext.showMask(msg) } },
{ name:'toLocalXY',function: function(event,view) { return this.ext.toLocalXY(event,view) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_Component_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_d3_Component_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_d3_Component_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_d3_Component_Component.METHODS()),
            events.concat(Ext_d3_Component_Component.EVENTS())



            //events.concat(Ext_d3_Component_Component.EVENTS()),
            //propertiesobject.concat(Ext_d3_Component_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_d3_Component_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_d3_Component_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_d3_Component_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_d3_Component_Component.METHODS())
        )
        //this.XTYPE = Ext_d3_Component_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_Component_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_d3_Component_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_d3_Component_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
