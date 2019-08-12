import Ext_calendar_panel_AbstractPanel_Component from '../../../Ext/calendar/panel/AbstractPanel';

export default class Ext_calendar_panel_Panel_Component extends Ext_calendar_panel_AbstractPanel_Component {
//events
//configs

static XTYPE() {return 'calendar'}
static PROPERTIESOBJECT() { return {
"calendarList":["object"],
"cls":["string","string[]"],
"compact":["boolean"],
"compactOptions":["object"],
"createButton":["object"],
"createButtonPosition":["string"],
"dateTitle":["object"],
"defaultView":["string"],
"highlightToday":["boolean"],
"nextButton":["object"],
"previousButton":["object"],
"referenceHolder":["boolean"],
"sideBar":["object"],
"store":["object","Ext.calendar.store.Calendars"],
"switcher":["object"],
"switcherPosition":["string"],
"timezoneOffset":["number"],
"titleBar":["object"],
"todayButton":["object"],
"value":["date"],
"views":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getCalendarList',function: function() { return this.ext.getCalendarList() } },
{ name:'getCreateButton',function: function() { return this.ext.getCreateButton() } },
{ name:'getNextButton',function: function() { return this.ext.getNextButton() } },
{ name:'getPreviousButton',function: function() { return this.ext.getPreviousButton() } },
{ name:'getSideBar',function: function() { return this.ext.getSideBar() } },
{ name:'getSwitcher',function: function() { return this.ext.getSwitcher() } },
{ name:'getTitleBar',function: function() { return this.ext.getTitleBar() } },
{ name:'getTodayButton',function: function() { return this.ext.getTodayButton() } },
{ name:'getView',function: function() { return this.ext.getView() } },
{ name:'moveNext',function: function() { return this.ext.moveNext() } },
{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
{ name:'setCalendarList',function: function() { return this.ext.setCalendarList() } },
{ name:'setCreateButton',function: function() { return this.ext.setCreateButton() } },
{ name:'setNextButton',function: function() { return this.ext.setNextButton() } },
{ name:'setPreviousButton',function: function() { return this.ext.setPreviousButton() } },
{ name:'setSideBar',function: function() { return this.ext.setSideBar() } },
{ name:'setSwitcher',function: function() { return this.ext.setSwitcher() } },
{ name:'setTitleBar',function: function() { return this.ext.setTitleBar() } },
{ name:'setTodayButton',function: function() { return this.ext.setTodayButton() } },
{ name:'setView',function: function(view) { return this.ext.setView(view) } },
{ name:'setViews',function: function() { return this.ext.setViews() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_panel_Panel_Component.METHODS(),
            Ext_calendar_panel_Panel_Component.XTYPE(),
            Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT(),
            Ext_calendar_panel_Panel_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_panel_Panel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Panel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Panel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
