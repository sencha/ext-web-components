import Ext_calendar_view_Base_Component from '../../../Ext/calendar/view/Base';

export default class Ext_calendar_view_Days_Component extends Ext_calendar_view_Base_Component {
//events
get onbeforeeventdragstart(){return this.getAttribute('onbeforeeventdragstart')};set onbeforeeventdragstart(onbeforeeventdragstart){this.setAttribute('onbeforeeventdragstart',onbeforeeventdragstart)}
get onbeforeeventresizestart(){return this.getAttribute('onbeforeeventresizestart')};set onbeforeeventresizestart(onbeforeeventresizestart){this.setAttribute('onbeforeeventresizestart',onbeforeeventresizestart)}
get oneventdrop(){return this.getAttribute('oneventdrop')};set oneventdrop(oneventdrop){this.setAttribute('oneventdrop',oneventdrop)}
get oneventresize(){return this.getAttribute('oneventresize')};set oneventresize(oneventresize){this.setAttribute('oneventresize',oneventresize)}
get onvalidateeventdrop(){return this.getAttribute('onvalidateeventdrop')};set onvalidateeventdrop(onvalidateeventdrop){this.setAttribute('onvalidateeventdrop',onvalidateeventdrop)}
get onvalidateeventresize(){return this.getAttribute('onvalidateeventresize')};set onvalidateeventresize(onvalidateeventresize){this.setAttribute('onvalidateeventresize',onvalidateeventresize)}
//configs

static XTYPE() {return 'calendar-daysview'}
static PROPERTIESOBJECT() { return {
"allowSelection":["boolean"],
"displayOverlap":["boolean"],
"draggable":["boolean"],
"droppable":["boolean"],
"endTime":["number"],
"resizeEvents":["boolean"],
"showNowMarker":["boolean"],
"startTime":["number"],
"timeFormat":["string"],
"timeRenderer":["function"],
"value":["date"],
"visibleDays":["number"],
}}
static EVENTS() { return [
{name:'beforeeventdragstart',parameters:'undefined,context'},
{name:'beforeeventresizestart',parameters:'undefined,context'},
{name:'eventdrop',parameters:'undefined,context'},
{name:'eventresize',parameters:'undefined,context'},
{name:'validateeventdrop',parameters:'undefined,context'},
{name:'validateeventresize',parameters:'undefined,context'},
]}
static METHODS() { return [
{ name:'calculateSlots',function: function() { return this.ext.calculateSlots() } },
{ name:'checkNowMarker',function: function() { return this.ext.checkNowMarker() } },
{ name:'clearAndPopulate',function: function(row,nodes,clearAll) { return this.ext.clearAndPopulate(row,nodes,clearAll) } },
{ name:'clearSelected',function: function() { return this.ext.clearSelected() } },
{ name:'constructAllDayEvents',function: function(events) { return this.ext.constructAllDayEvents(events) } },
{ name:'constructEvents',function: function() { return this.ext.constructEvents() } },
{ name:'createScroller',function: function() { return this.ext.createScroller() } },
{ name:'doCheckNowMarker',function: function() { return this.ext.doCheckNowMarker() } },
{ name:'doRecalculate',function: function(start) { return this.ext.doRecalculate(start) } },
{ name:'generateAllDayCells',function: function(cls,html) { return this.ext.generateAllDayCells(cls,html) } },
{ name:'generateColumns',function: function() { return this.ext.generateColumns() } },
{ name:'generateTimeElements',function: function() { return this.ext.generateTimeElements() } },
{ name:'generateTimeLabels',function: function() { return this.ext.generateTimeLabels() } },
{ name:'getColumn',function: function(index) { return this.ext.getColumn(index) } },
{ name:'getColumns',function: function() { return this.ext.getColumns() } },
{ name:'getEventColumn',function: function(index) { return this.ext.getEventColumn(index) } },
{ name:'getEventStyle',function: function() { return this.ext.getEventStyle() } },
{ name:'getEventWidget',function: function(event) { return this.ext.getEventWidget(event) } },
{ name:'getSlotStyle',function: function() { return this.ext.getSlotStyle() } },
{ name:'handleEventTap',function: function(e) { return this.ext.handleEventTap(e) } },
{ name:'onAllDayTouchEnd',function: function(e) { return this.ext.onAllDayTouchEnd(e) } },
{ name:'onAllDayTouchMove',function: function(e) { return this.ext.onAllDayTouchMove(e) } },
{ name:'onAllDayTouchStart',function: function(e) { return this.ext.onAllDayTouchStart(e) } },
{ name:'onBodyTouchEnd',function: function(e) { return this.ext.onBodyTouchEnd(e) } },
{ name:'onBodyTouchMove',function: function(e) { return this.ext.onBodyTouchMove(e) } },
{ name:'onBodyTouchStart',function: function(e) { return this.ext.onBodyTouchStart(e) } },
{ name:'onResizerDrag',function: function(e) { return this.ext.onResizerDrag(e) } },
{ name:'onResizerDragEnd',function: function(e) { return this.ext.onResizerDragEnd(e) } },
{ name:'onResizerDragStart',function: function(e) { return this.ext.onResizerDragStart(e) } },
{ name:'processDay',function: function(day,frag) { return this.ext.processDay(day,frag) } },
{ name:'recalculate',function: function() { return this.ext.recalculate() } },
{ name:'refreshHeaders',function: function() { return this.ext.refreshHeaders() } },
{ name:'roundDate',function: function(d) { return this.ext.roundDate(d) } },
{ name:'selectRange',function: function(start,end) { return this.ext.selectRange(start,end) } },
{ name:'setTimeRange',function: function(start,end) { return this.ext.setTimeRange(start,end) } },
{ name:'slotFromPosition',function: function(pageY,local) { return this.ext.slotFromPosition(pageY,local) } },
{ name:'slotToPosition',function: function(slot) { return this.ext.slotToPosition(slot) } },
{ name:'syncHeaderScroll',function: function() { return this.ext.syncHeaderScroll() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Days_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Days_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_view_Days_Component.METHODS(),
            Ext_calendar_view_Days_Component.XTYPE(),
            Ext_calendar_view_Days_Component.PROPERTIESOBJECT(),
            Ext_calendar_view_Days_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_view_Days_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Days_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_view_Days_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_view_Days_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
