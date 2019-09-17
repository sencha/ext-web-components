import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_form_Display_Component extends Ext_field_Field_Component {
//events
//configs

static XTYPE() {return 'displayfield'}
static PROPERTIESOBJECT() { return {
"encodeHtml":["boolean"],
"focusable":["boolean"],
"readOnly":["boolean"],
"renderer":["function","string"],
"scope":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getBodyTemplate',function: function() { return this.ext.getBodyTemplate() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_Display_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_Display_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_form_Display_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_form_Display_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_form_Display_Component.METHODS()),
            events.concat(Ext_form_Display_Component.EVENTS())



            //events.concat(Ext_form_Display_Component.EVENTS()),
            //propertiesobject.concat(Ext_form_Display_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_form_Display_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_form_Display_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_form_Display_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_form_Display_Component.METHODS())
        )
        //this.XTYPE = Ext_form_Display_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Display_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_form_Display_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_form_Display_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
