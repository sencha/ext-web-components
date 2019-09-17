import Ext_field_Select_Component from '../../../Ext/field/Select';

export default class Ext_calendar_form_TimeField_Component extends Ext_field_Select_Component {
//events
//configs

static XTYPE() {return 'calendar-timefield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_form_TimeField_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_calendar_form_TimeField_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_calendar_form_TimeField_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_calendar_form_TimeField_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
