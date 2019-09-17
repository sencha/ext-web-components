import Ext_Gadget_Component from '../Ext/Gadget';

export default class Ext_ProgressBarWidget_Component extends Ext_Gadget_Component {
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
        for (var property in Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ProgressBarWidget_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_ProgressBarWidget_Component.METHODS()),
            events.concat(Ext_ProgressBarWidget_Component.EVENTS())



            //events.concat(Ext_ProgressBarWidget_Component.EVENTS()),
            //propertiesobject.concat(Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_ProgressBarWidget_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_ProgressBarWidget_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_ProgressBarWidget_Component.METHODS())
        )
        //this.XTYPE = Ext_ProgressBarWidget_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ProgressBarWidget_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_ProgressBarWidget_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_ProgressBarWidget_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
