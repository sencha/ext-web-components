import Ext_calendar_view_Base_Component from '../../../Ext/calendar/view/Base';

export default class Ext_calendar_view_Weeks_Component extends Ext_calendar_view_Base_Component {
//events
get onbeforeeventdragstart(){return this.getAttribute('onbeforeeventdragstart')};set onbeforeeventdragstart(onbeforeeventdragstart){this.setAttribute('onbeforeeventdragstart',onbeforeeventdragstart)}
get oneventdrop(){return this.getAttribute('oneventdrop')};set oneventdrop(oneventdrop){this.setAttribute('oneventdrop',oneventdrop)}
get onselect(){return this.getAttribute('onselect')};set onselect(onselect){this.setAttribute('onselect',onselect)}
get onselectrange(){return this.getAttribute('onselectrange')};set onselectrange(onselectrange){this.setAttribute('onselectrange',onselectrange)}
get onvalidateeventdrop(){return this.getAttribute('onvalidateeventdrop')};set onvalidateeventdrop(onvalidateeventdrop){this.setAttribute('onvalidateeventdrop',onvalidateeventdrop)}
//configs

static XTYPE() {return 'calendar-weeksview'}
static PROPERTIESOBJECT() { return {
"addOnSelect":["boolean"],
"allowSelection":["boolean"],
"compactOptions":["object"],
"dayFormat":["string"],
"draggable":["boolean"],
"droppable":["boolean"],
"firstDayOfWeek":["number"],
"overflowText":["string"],
"showOverflow":["string"],
"value":["date"],
"visibleDays":["number"],
"visibleWeeks":["number"],
"weekendDays":["number[]"],
}}
static EVENTS() { return [
{name:'beforeeventdragstart',parameters:'undefined,context'},
{name:'eventdrop',parameters:'undefined,context'},
{name:'select',parameters:'undefined,context'},
{name:'selectrange',parameters:'undefined,context'},
{name:'validateeventdrop',parameters:'undefined,context'},
]}
static METHODS() { return [
{ name:'clearSelected',function: function() { return this.ext.clearSelected() } },
{ name:'constructEvents',function: function() { return this.ext.constructEvents() } },
{ name:'createEvent',function: function(event,cfg,dummy) { return this.ext.createEvent(event,cfg,dummy) } },
{ name:'doRecalculate',function: function(start) { return this.ext.doRecalculate(start) } },
{ name:'doRefresh',function: function() { return this.ext.doRefresh() } },
{ name:'doRefreshEvents',function: function() { return this.ext.doRefreshEvents() } },
{ name:'findIndex',function: function(sizes,offset) { return this.ext.findIndex(sizes,offset) } },
{ name:'generateCells',function: function(numRows,setHeights) { return this.ext.generateCells(numRows,setHeights) } },
{ name:'getCell',function: function(date) { return this.ext.getCell(date) } },
{ name:'getCellByPosition',function: function(pageX,pageY) { return this.ext.getCellByPosition(pageX,pageY) } },
{ name:'getCellFromEvent',function: function(e,inferFromWidget) { return this.ext.getCellFromEvent(e,inferFromWidget) } },
{ name:'getDateFromCell',function: function(cell) { return this.ext.getDateFromCell(cell) } },
{ name:'getDaySizes',function: function() { return this.ext.getDaySizes() } },
{ name:'getEventStyle',function: function() { return this.ext.getEventStyle() } },
{ name:'getEventWidget',function: function(el) { return this.ext.getEventWidget(el) } },
{ name:'getMoveBaseValue',function: function() { return this.ext.getMoveBaseValue() } },
{ name:'getMoveInterval',function: function() { return this.ext.getMoveInterval() } },
{ name:'handleEventTap',function: function(e) { return this.ext.handleEventTap(e) } },
{ name:'handleResize',function: function() { return this.ext.handleResize() } },
{ name:'onOverflowClick',function: function(e) { return this.ext.onOverflowClick(e) } },
{ name:'onSourceAttach',function: function() { return this.ext.onSourceAttach() } },
{ name:'onTouchEnd',function: function(event) { return this.ext.onTouchEnd(event) } },
{ name:'onTouchMove',function: function(e) { return this.ext.onTouchMove(e) } },
{ name:'onTouchStart',function: function(e,t) { return this.ext.onTouchStart(e,t) } },
{ name:'positionEvent',function: function(el,item) { return this.ext.positionEvent(el,item) } },
{ name:'positionSum',function: function(start,len,sizes) { return this.ext.positionSum(start,len,sizes) } },
{ name:'processWeek',function: function(week,frag) { return this.ext.processWeek(week,frag) } },
{ name:'queryCells',function: function() { return this.ext.queryCells() } },
{ name:'recalculate',function: function() { return this.ext.recalculate() } },
{ name:'refreshHeaders',function: function() { return this.ext.refreshHeaders() } },
{ name:'selectRange',function: function(from,to) { return this.ext.selectRange(from,to) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Weeks_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_view_Weeks_Component.METHODS(),
            Ext_calendar_view_Weeks_Component.XTYPE(),
            Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT(),
            Ext_calendar_view_Weeks_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_view_Weeks_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_view_Weeks_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_view_Weeks_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
