import Ext_calendar_EventBase from '../../Ext/calendar/EventBase.js';

export default class Ext_calendar_Event extends Ext_calendar_EventBase {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'defaultTitle',
    'disabled',
    'endDate',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'mode',
    'model',
    'name',
    'nameable',
    'palette',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'resize',
    'ripple',
    'session',
    'shareableName',
    'startDate',
    'style',
    'timeFormat',
    'title',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'view',
    'viewModel',
    'width',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_Event.PROPERTIES());
    return Ext_calendar_EventBase.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_Event.EVENTS());
    return Ext_calendar_EventBase.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_Event.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_Event.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_Event.PROPERTIES()),
      events.concat(Ext_calendar_Event.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
