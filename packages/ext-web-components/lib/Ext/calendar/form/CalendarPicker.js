import Ext_field_Select_Component from '../../../Ext/field/Select';

export default class Ext_calendar_form_CalendarPicker_Component extends Ext_field_Select_Component {
//events
//configs

static XTYPE() {return 'calendar-calendar-picker'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_form_CalendarPicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_form_CalendarPicker_Component.METHODS(),
            Ext_calendar_form_CalendarPicker_Component.XTYPE(),
            Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT(),
            Ext_calendar_form_CalendarPicker_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_form_CalendarPicker_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_form_CalendarPicker_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_form_CalendarPicker_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
