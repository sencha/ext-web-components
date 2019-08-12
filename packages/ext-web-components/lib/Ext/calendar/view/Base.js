import Ext_Gadget_Component from '../../../Ext/Gadget';

export default class Ext_calendar_view_Base_Component extends Ext_Gadget_Component {
//events
get onbeforeeventadd(){return this.getAttribute('onbeforeeventadd')};set onbeforeeventadd(onbeforeeventadd){this.setAttribute('onbeforeeventadd',onbeforeeventadd)}
get onbeforeeventedit(){return this.getAttribute('onbeforeeventedit')};set onbeforeeventedit(onbeforeeventedit){this.setAttribute('onbeforeeventedit',onbeforeeventedit)}
get oneventadd(){return this.getAttribute('oneventadd')};set oneventadd(oneventadd){this.setAttribute('oneventadd',oneventadd)}
get oneventdrop(){return this.getAttribute('oneventdrop')};set oneventdrop(oneventdrop){this.setAttribute('oneventdrop',oneventdrop)}
get oneventedit(){return this.getAttribute('oneventedit')};set oneventedit(oneventedit){this.setAttribute('oneventedit',oneventedit)}
get oneventtap(){return this.getAttribute('oneventtap')};set oneventtap(oneventtap){this.setAttribute('oneventtap',oneventtap)}
get onvalidateeventadd(){return this.getAttribute('onvalidateeventadd')};set onvalidateeventadd(onvalidateeventadd){this.setAttribute('onvalidateeventadd',onvalidateeventadd)}
get onvalidateeventdrop(){return this.getAttribute('onvalidateeventdrop')};set onvalidateeventdrop(onvalidateeventdrop){this.setAttribute('onvalidateeventdrop',onvalidateeventdrop)}
get onvalidateeventedit(){return this.getAttribute('onvalidateeventedit')};set onvalidateeventedit(onvalidateeventedit){this.setAttribute('onvalidateeventedit',onvalidateeventedit)}
get onvaluechange(){return this.getAttribute('onvaluechange')};set onvaluechange(onvaluechange){this.setAttribute('onvaluechange',onvaluechange)}
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"addForm":["object"],
"compact":["boolean"],
"compactOptions":["object"],
"controlStoreRange":["boolean"],
"editForm":["object"],
"eventDefaults":["object"],
"gestureNavigation":["boolean"],
"header":["Ext.calendar.header.Base"],
"store":["object","Ext.calendar.store.Calendars"],
"timezoneOffset":["number"],
"value":["date"],
}}
static EVENTS() { return [
{name:'beforeeventadd',parameters:'undefined,context'},
{name:'beforeeventedit',parameters:'undefined,context'},
{name:'eventadd',parameters:'undefined,context'},
{name:'eventdrop',parameters:'undefined,context'},
{name:'eventedit',parameters:'undefined,context'},
{name:'eventtap',parameters:'undefined,context'},
{name:'validateeventadd',parameters:'undefined,context'},
{name:'validateeventdrop',parameters:'undefined,context'},
{name:'validateeventedit',parameters:'undefined,context'},
{name:'valuechange',parameters:'undefined,context'},
]}
static METHODS() { return [
{ name:'calculateMoveNext',function: function() { return this.ext.calculateMoveNext() } },
{ name:'calculateMovePrevious',function: function() { return this.ext.calculateMovePrevious() } },
{ name:'clearEvents',function: function() { return this.ext.clearEvents() } },
{ name:'createAddForm',function: function() { return this.ext.createAddForm() } },
{ name:'createEditForm',function: function(event) { return this.ext.createEditForm(event) } },
{ name:'createEvent',function: function(event,cfg,dummy) { return this.ext.createEvent(event,cfg,dummy) } },
{ name:'createEvents',function: function(events,cfg) { return this.ext.createEvents(events,cfg) } },
{ name:'doRefresh',function: function() { return this.ext.doRefresh() } },
{ name:'doRefreshEvents',function: function() { return this.ext.doRefreshEvents() } },
{ name:'doShowForm',function: function(event,type,cfg,successFn,options) { return this.ext.doShowForm(event,type,cfg,successFn,options) } },
{ name:'getBodyElement',function: function() { return this.ext.getBodyElement() } },
{ name:'getCalendar',function: function(id) { return this.ext.getCalendar(id) } },
{ name:'getDaysSpanned',function: function(start,end,allDay) { return this.ext.getDaysSpanned(start,end,allDay) } },
{ name:'getDefaultCreateRange',function: function() { return this.ext.getDefaultCreateRange() } },
{ name:'getDefaultPalette',function: function() { return this.ext.getDefaultPalette() } },
{ name:'getDisplayRange',function: function() { return this.ext.getDisplayRange() } },
{ name:'getEditableCalendars',function: function() { return this.ext.getEditableCalendars() } },
{ name:'getEvent',function: function(el) { return this.ext.getEvent(el) } },
{ name:'getEventDaysSpanned',function: function(event) { return this.ext.getEventDaysSpanned(event) } },
{ name:'getEventPalette',function: function(event) { return this.ext.getEventPalette(event) } },
{ name:'getEventSource',function: function() { return this.ext.getEventSource() } },
{ name:'getForm',function: function() { return this.ext.getForm() } },
{ name:'getMoveBaseValue',function: function() { return this.ext.getMoveBaseValue() } },
{ name:'getMoveInteral',function: function() { return this.ext.getMoveInteral() } },
{ name:'getSourceListeners',function: function() { return this.ext.getSourceListeners() } },
{ name:'getStoreListeners',function: function() { return this.ext.getStoreListeners() } },
{ name:'getUtcNow',function: function() { return this.ext.getUtcNow() } },
{ name:'getVisibleRange',function: function() { return this.ext.getVisibleRange() } },
{ name:'handleChange',function: function(type,event,newRange,callback) { return this.ext.handleChange(type,event,newRange,callback) } },
{ name:'handleChangeStart',function: function(type,event) { return this.ext.handleChangeStart(type,event) } },
{ name:'handleResize',function: function() { return this.ext.handleResize() } },
{ name:'hasEditableCalendars',function: function() { return this.ext.hasEditableCalendars() } },
{ name:'isEventHidden',function: function(event) { return this.ext.isEventHidden(event) } },
{ name:'moveNext',function: function() { return this.ext.moveNext() } },
{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
{ name:'onBodySwipe',function: function(e) { return this.ext.onBodySwipe(e) } },
{ name:'onEventTap',function: function(event) { return this.ext.onEventTap(event) } },
{ name:'onFormCancel',function: function(form) { return this.ext.onFormCancel(form) } },
{ name:'onFormCreateSave',function: function(form,event,data) { return this.ext.onFormCreateSave(form,event,data) } },
{ name:'onFormEditSave',function: function(form,event,data) { return this.ext.onFormEditSave(form,event,data) } },
{ name:'onSourceAdd',function: function(source,events) { return this.ext.onSourceAdd(source,events) } },
{ name:'onSourceAttach',function: function() { return this.ext.onSourceAttach() } },
{ name:'onSourceRefresh',function: function(source) { return this.ext.onSourceRefresh(source) } },
{ name:'onSourceRemove',function: function(source,events) { return this.ext.onSourceRemove(source,events) } },
{ name:'onSourceUpdate',function: function(source,event) { return this.ext.onSourceUpdate(source,event) } },
{ name:'onStoreUpdate',function: function(store,calendar) { return this.ext.onStoreUpdate(store,calendar) } },
{ name:'refresh',function: function() { return this.ext.refresh() } },
{ name:'refreshEvents',function: function() { return this.ext.refreshEvents() } },
{ name:'refreshHeaders',function: function() { return this.ext.refreshHeaders() } },
{ name:'resumeEventRefresh',function: function() { return this.ext.resumeEventRefresh() } },
{ name:'setSourceRange',function: function(range) { return this.ext.setSourceRange(range) } },
{ name:'showAddForm',function: function(event,options) { return this.ext.showAddForm(event,options) } },
{ name:'showEditForm',function: function(event,options) { return this.ext.showEditForm(event,options) } },
{ name:'suspendEventRefresh',function: function() { return this.ext.suspendEventRefresh() } },
{ name:'toUtcOffset',function: function(date) { return this.ext.toUtcOffset(date) } },
{ name:'utcToLocal',function: function(d) { return this.ext.utcToLocal(d) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_view_Base_Component.METHODS(),
            Ext_calendar_view_Base_Component.XTYPE(),
            Ext_calendar_view_Base_Component.PROPERTIESOBJECT(),
            Ext_calendar_view_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_view_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_view_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_view_Base_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
