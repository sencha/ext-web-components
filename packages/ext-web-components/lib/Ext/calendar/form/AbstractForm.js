import Ext_form_Panel_Component from '../../../Ext/form/Panel';

export default class Ext_calendar_form_AbstractForm_Component extends Ext_form_Panel_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"allDayField":["object"],
"calendarField":["object"],
"cancelButton":["object"],
"descriptionField":["object"],
"dropButton":["object"],
"endDateField":["object"],
"endTimeField":["object"],
"saveButton":["object"],
"startDateField":["object"],
"startTimeField":["object"],
"titleField":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_form_AbstractForm_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_form_AbstractForm_Component.METHODS(),
            Ext_calendar_form_AbstractForm_Component.XTYPE(),
            Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT(),
            Ext_calendar_form_AbstractForm_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_form_AbstractForm_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_form_AbstractForm_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_form_AbstractForm_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
