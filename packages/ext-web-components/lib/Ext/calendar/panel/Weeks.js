import Ext_calendar_panel_Base_Component from '../../../Ext/calendar/panel/Base';

export default class Ext_calendar_panel_Weeks_Component extends Ext_calendar_panel_Base_Component {
//events
get onbeforeeventdragstart(){return this.getAttribute('onbeforeeventdragstart')};set onbeforeeventdragstart(onbeforeeventdragstart){this.setAttribute('onbeforeeventdragstart',onbeforeeventdragstart)}
get oneventdrop(){return this.getAttribute('oneventdrop')};set oneventdrop(oneventdrop){this.setAttribute('oneventdrop',oneventdrop)}
get onvalidateeventdrop(){return this.getAttribute('onvalidateeventdrop')};set onvalidateeventdrop(onvalidateeventdrop){this.setAttribute('onvalidateeventdrop',onvalidateeventdrop)}
//configs

static XTYPE() {return 'calendar-weeks'}
static PROPERTIESOBJECT() { return {
"addOnSelect":["boolean"],
"allowSelection":["boolean"],
"dayFormat":["boolean"],
"dayHeader":["object"],
"dayHeaderFormat":["string"],
"draggable":["boolean"],
"droppable":["boolean"],
"eventRelayers":["object"],
"firstDayOfWeek":["boolean"],
"highlightToday":["any"],
"overflowText":["boolean"],
"showOverflow":["string"],
"view":["object"],
"visibleDays":["number"],
"visibleWeeks":["number"],
"weekendDays":["number[]"],
}}
static EVENTS() { return [
{name:'beforeeventdragstart',parameters:'undefined,context'},
{name:'eventdrop',parameters:'undefined,context'},
{name:'validateeventdrop',parameters:'undefined,context'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_Weeks_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_Weeks_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_panel_Weeks_Component.METHODS(),
            Ext_calendar_panel_Weeks_Component.XTYPE(),
            Ext_calendar_panel_Weeks_Component.PROPERTIESOBJECT(),
            Ext_calendar_panel_Weeks_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_panel_Weeks_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Weeks_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Weeks_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Weeks_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
