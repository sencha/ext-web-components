import Ext_calendar_AbstractList_Component from '../../Ext/calendar/AbstractList';

export default class Ext_calendar_List_Component extends Ext_calendar_AbstractList_Component {
//events
//configs

static XTYPE() {return 'calendar-list'}
static PROPERTIESOBJECT() { return {
"enableToggle":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_List_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_List_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_List_Component.METHODS(),
            Ext_calendar_List_Component.XTYPE(),
            Ext_calendar_List_Component.PROPERTIESOBJECT(),
            Ext_calendar_List_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_List_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_List_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_List_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_List_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
