import Ext_field_trigger_Base_Component from '../../../Ext/field/trigger/Base';

export default class Ext_field_trigger_Component_Component extends Ext_field_trigger_Base_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"component":["Ext.Component"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_trigger_Component_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_trigger_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_trigger_Component_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_trigger_Component_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_trigger_Component_Component.METHODS()),
            events.concat(Ext_field_trigger_Component_Component.EVENTS())



            //events.concat(Ext_field_trigger_Component_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_trigger_Component_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_trigger_Component_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_trigger_Component_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_trigger_Component_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_trigger_Component_Component.METHODS())
        )
        //this.XTYPE = Ext_field_trigger_Component_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Component_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_trigger_Component_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_trigger_Component_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
