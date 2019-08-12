import Ext_calendar_form_Form_Component from '../../../Ext/calendar/form/Form';

export default class Ext_calendar_form_Edit_Component extends Ext_calendar_form_Form_Component {
//events
//configs

static XTYPE() {return 'calendar-form-edit'}
static PROPERTIESOBJECT() { return {
"title":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_form_Edit_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_form_Edit_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_form_Edit_Component.METHODS(),
            Ext_calendar_form_Edit_Component.XTYPE(),
            Ext_calendar_form_Edit_Component.PROPERTIESOBJECT(),
            Ext_calendar_form_Edit_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_form_Edit_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_Edit_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_form_Edit_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_form_Edit_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
