import Ext_Component_Component from '../Ext/Component';

export default class Ext_Spacer_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'spacer'}
static PROPERTIESOBJECT() { return {
"flex":["number"],
"width":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Spacer_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Spacer_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Spacer_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Spacer_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Spacer_Component.METHODS()),
            events.concat(Ext_Spacer_Component.EVENTS())



            //events.concat(Ext_Spacer_Component.EVENTS()),
            //propertiesobject.concat(Ext_Spacer_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Spacer_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Spacer_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Spacer_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Spacer_Component.METHODS())
        )
        //this.XTYPE = Ext_Spacer_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Spacer_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Spacer_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Spacer_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
