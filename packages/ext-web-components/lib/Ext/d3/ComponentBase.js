import Ext_Component_Component from '../../Ext/Component';

export default class Ext_d3_ComponentBase_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_ComponentBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_ComponentBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_d3_ComponentBase_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_d3_ComponentBase_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_d3_ComponentBase_Component.METHODS()),
            events.concat(Ext_d3_ComponentBase_Component.EVENTS())



            //events.concat(Ext_d3_ComponentBase_Component.EVENTS()),
            //propertiesobject.concat(Ext_d3_ComponentBase_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_d3_ComponentBase_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_d3_ComponentBase_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_d3_ComponentBase_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_d3_ComponentBase_Component.METHODS())
        )
        //this.XTYPE = Ext_d3_ComponentBase_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_ComponentBase_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_d3_ComponentBase_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_d3_ComponentBase_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
