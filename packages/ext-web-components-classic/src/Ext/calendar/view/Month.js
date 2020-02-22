import Ext_calendar_view_Weeks from '../../../Ext/calendar/view/Weeks.js';

export default class Ext_calendar_view_Month extends Ext_calendar_view_Weeks {
  static PROPERTIES() { return [
    'addForm',
    'addOnSelect',
    'allowSelection',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'compact',
    'compactOptions',
    'controller',
    'controlStoreRange',
    'dayFormat',
    'defaultListenerScope',
    'disabled',
    'draggable',
    'droppable',
    'editForm',
    'eventDefaults',
    'firstDayOfWeek',
    'focusCls',
    'gestureNavigation',
    'header',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'overflowText',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'showOverflow',
    'store',
    'style',
    'timezoneOffset',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
    'width',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeeventadd', parameters:'sender,context'},
    {name:'beforeeventdragstart', parameters:'sender,context'},
    {name:'beforeeventedit', parameters:'sender,context'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'eventadd', parameters:'sender,context'},
    {name:'eventdrop', parameters:'sender,context'},
    {name:'eventedit', parameters:'sender,context'},
    {name:'eventtap', parameters:'sender,context'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'select', parameters:'sender,context'},
    {name:'selectrange', parameters:'sender,context'},
    {name:'validateeventadd', parameters:'sender,context'},
    {name:'validateeventdrop', parameters:'sender,context'},
    {name:'validateeventedit', parameters:'sender,context'},
    {name:'valuechange', parameters:'sender,context'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Month.PROPERTIES());
    return Ext_calendar_view_Weeks.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_view_Month.EVENTS());
    return Ext_calendar_view_Weeks.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_view_Month.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_view_Month.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_view_Month.PROPERTIES()),
      events.concat(Ext_calendar_view_Month.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
