import Ext_Gadget_Component from '../Ext/Gadget';

export default class Ext_Progress_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return 'progress'}
static PROPERTIESOBJECT() { return {
"animate":["boolean"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Progress_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Progress_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Progress_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Progress_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Progress_Component.METHODS()),
            events.concat(Ext_Progress_Component.EVENTS())



            //events.concat(Ext_Progress_Component.EVENTS()),
            //propertiesobject.concat(Ext_Progress_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Progress_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Progress_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Progress_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Progress_Component.METHODS())
        )
        //this.XTYPE = Ext_Progress_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Progress_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Progress_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Progress_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
