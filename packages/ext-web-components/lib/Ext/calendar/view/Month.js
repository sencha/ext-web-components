import Ext_calendar_view_Weeks_Component from '../../../Ext/calendar/view/Weeks';

export default class Ext_calendar_view_Month_Component extends Ext_calendar_view_Weeks_Component {
//events
//configs

static XTYPE() {return 'calendar-monthview'}
static PROPERTIESOBJECT() { return {
"value":["date"],
"visibleWeeks":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'doRecalculate',function: function(start) { return this.ext.doRecalculate(start) } },
{ name:'getNavigateValue',function: function(n) { return this.ext.getNavigateValue(n) } },
{ name:'nextMonth',function: function(months) { return this.ext.nextMonth(months) } },
{ name:'nextYear',function: function(years) { return this.ext.nextYear(years) } },
{ name:'previousMonth',function: function(months) { return this.ext.previousMonth(months) } },
{ name:'previousYear',function: function(years) { return this.ext.previousYear(years) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Month_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Month_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_view_Month_Component.METHODS(),
            Ext_calendar_view_Month_Component.XTYPE(),
            Ext_calendar_view_Month_Component.PROPERTIESOBJECT(),
            Ext_calendar_view_Month_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_view_Month_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Month_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_view_Month_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_view_Month_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
