import Ext_calendar_view_Base from '../../../Ext/calendar/view/Base.js';

export default class Ext_calendar_view_Days extends Ext_calendar_view_Base {
  static PROPERTIES() { return [
    'addForm',
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
    'defaultListenerScope',
    'disabled',
    'displayOverlap',
    'draggable',
    'droppable',
    'editForm',
    'endTime',
    'eventDefaults',
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
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'resizeEvents',
    'ripple',
    'session',
    'shareableName',
    'showNowMarker',
    'startTime',
    'store',
    'style',
    'timeFormat',
    'timeRenderer',
    'timezoneOffset',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'visibleDays',
    'width',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeeventadd', parameters:'sender,context'},
    {name:'beforeeventdragstart', parameters:'sender,context'},
    {name:'beforeeventedit', parameters:'sender,context'},
    {name:'beforeeventresizestart', parameters:'sender,context'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'eventadd', parameters:'sender,context'},
    {name:'eventdrop', parameters:'sender,context'},
    {name:'eventedit', parameters:'sender,context'},
    {name:'eventresize', parameters:'sender,context'},
    {name:'eventtap', parameters:'sender,context'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'validateeventadd', parameters:'sender,context'},
    {name:'validateeventdrop', parameters:'sender,context'},
    {name:'validateeventedit', parameters:'sender,context'},
    {name:'validateeventresize', parameters:'sender,context'},
    {name:'valuechange', parameters:'sender,context'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Days.PROPERTIES());
    return Ext_calendar_view_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_view_Days.EVENTS());
    return Ext_calendar_view_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_view_Days.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_view_Days.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_view_Days.PROPERTIES()),
      events.concat(Ext_calendar_view_Days.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
