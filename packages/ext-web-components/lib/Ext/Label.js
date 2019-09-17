import Ext_Component_Component from '../Ext/Component';

export default class Ext_Label_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'label'}
static PROPERTIESOBJECT() { return {
"html":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Label_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Label_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Label_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Label_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Label_Component.METHODS()),
            events.concat(Ext_Label_Component.EVENTS())



            //events.concat(Ext_Label_Component.EVENTS()),
            //propertiesobject.concat(Ext_Label_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Label_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Label_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Label_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Label_Component.METHODS())
        )
        //this.XTYPE = Ext_Label_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Label_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Label_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Label_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
