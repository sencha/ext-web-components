import Ext_calendar_panel_AbstractBase_Component from '../../../Ext/calendar/panel/AbstractBase';

export default class Ext_calendar_panel_Base_Component extends Ext_calendar_panel_AbstractBase_Component {
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
"cls":["string","string[]"],
"compact":["boolean"],
"compactOptions":["object"],
"controlStoreRange":["boolean"],
"dayHeader":["object"],
"editForm":["object"],
"eventDefaults":["object"],
"eventRelayers":["object"],
"gestureNavigation":["boolean"],
"store":["object","Ext.calendar.store.Calendars"],
"timezoneOffset":["number"],
"twoWayBindable":["string","string[]","object"],
"value":["date"],
"view":["object"],
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
{ name:'createItemRelayer',function: function(name) { return this.ext.createItemRelayer(name) } },
{ name:'generateProxyMethod',function: function(thisCfg,targetCfg,targetName) { return this.ext.generateProxyMethod(thisCfg,targetCfg,targetName) } },
{ name:'getDisplayRange',function: function() { return this.ext.getDisplayRange() } },
{ name:'getVisibleRange',function: function() { return this.ext.getVisibleRange() } },
{ name:'initRelayers',function: function() { return this.ext.initRelayers() } },
{ name:'moveNext',function: function() { return this.ext.moveNext() } },
{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
{ name:'refreshEvents',function: function() { return this.ext.refreshEvents() } },
{ name:'setupProxy',function: function(configs,targetName) { return this.ext.setupProxy(configs,targetName) } },
{ name:'showAddForm',function: function(data,options) { return this.ext.showAddForm(data,options) } },
{ name:'showEditForm',function: function(event,options) { return this.ext.showEditForm(event,options) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_calendar_panel_Base_Component.METHODS(),
            Ext_calendar_panel_Base_Component.XTYPE(),
            Ext_calendar_panel_Base_Component.PROPERTIESOBJECT(),
            Ext_calendar_panel_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_calendar_panel_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_calendar_panel_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_calendar_panel_Base_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
