import Ext_MessageBox_Component from '../Ext/MessageBox';

export default class Ext_Msg_Component extends Ext_MessageBox_Component {
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
        for (var property in Ext_Msg_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Msg_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Msg_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Msg_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Msg_Component.METHODS()),
            events.concat(Ext_Msg_Component.EVENTS())



            //events.concat(Ext_Msg_Component.EVENTS()),
            //propertiesobject.concat(Ext_Msg_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Msg_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Msg_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Msg_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Msg_Component.METHODS())
        )
        //this.XTYPE = Ext_Msg_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Msg_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Msg_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Msg_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
