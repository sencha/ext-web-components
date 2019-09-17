import Ext_Container_Component from '../../Ext/Container';

export default class Ext_draw_ContainerBase_Component extends Ext_Container_Component {
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
        for (var property in Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_ContainerBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_draw_ContainerBase_Component.METHODS()),
            events.concat(Ext_draw_ContainerBase_Component.EVENTS())



            //events.concat(Ext_draw_ContainerBase_Component.EVENTS()),
            //propertiesobject.concat(Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_draw_ContainerBase_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_draw_ContainerBase_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_draw_ContainerBase_Component.METHODS())
        )
        //this.XTYPE = Ext_draw_ContainerBase_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_ContainerBase_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_draw_ContainerBase_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_draw_ContainerBase_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
