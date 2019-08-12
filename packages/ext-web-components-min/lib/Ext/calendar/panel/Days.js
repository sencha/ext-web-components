import Ext_calendar_panel_Base_Component from '../../../Ext/calendar/panel/Base';

export default class Ext_calendar_panel_Days_Component extends Ext_calendar_panel_Base_Component {
//events
get onbeforeeventdragstart(){return this.getAttribute('onbeforeeventdragstart')};set onbeforeeventdragstart(onbeforeeventdragstart){this.setAttribute('onbeforeeventdragstart',onbeforeeventdragstart)}
get onbeforeeventresizestart(){return this.getAttribute('onbeforeeventresizestart')};set onbeforeeventresizestart(onbeforeeventresizestart){this.setAttribute('onbeforeeventresizestart',onbeforeeventresizestart)}
get oneventdrop(){return this.getAttribute('oneventdrop')};set oneventdrop(oneventdrop){this.setAttribute('oneventdrop',oneventdrop)}
get oneventresize(){return this.getAttribute('oneventresize')};set oneventresize(oneventresize){this.setAttribute('oneventresize',oneventresize)}
get onvalidateeventdrop(){return this.getAttribute('onvalidateeventdrop')};set onvalidateeventdrop(onvalidateeventdrop){this.setAttribute('onvalidateeventdrop',onvalidateeventdrop)}
get onvalidateeventresize(){return this.getAttribute('onvalidateeventresize')};set onvalidateeventresize(onvalidateeventresize){this.setAttribute('onvalidateeventresize',onvalidateeventresize)}
//configs

static XTYPE() {return 'calendar-days'}
static PROPERTIESOBJECT() { return {
"allowSelection":["boolean"],
"dayHeader":["object"],
"dayHeaderFormat":["string"],
"displayOverlap":["boolean"],
"draggable":["boolean"],
"droppable":["boolean"],
"endTime":["number"],
"eventRelayers":["object"],
"highlightToday":["any"],
"resizeEvents":["boolean"],
"showNowMarker":["boolean"],
"startTime":["number"],
"timeFormat":["string"],
"view":["object"],
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
{ name:'setTimeRange',function: function(start,end) { return this.ext.setTimeRange(start,end) } },
]}

constructor() {
    super (
        Ext_calendar_panel_Days_Component.METHODS(),
        Ext_calendar_panel_Days_Component.XTYPE(),
        Ext_calendar_panel_Days_Component.PROPERTIESOBJECT(),
        Ext_calendar_panel_Days_Component.EVENTS()
    )
    this.XTYPE = Ext_calendar_panel_Days_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Days_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Days_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Days_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-calendar-days', Ext_calendar_panel_Days_Component);
  });
})();

