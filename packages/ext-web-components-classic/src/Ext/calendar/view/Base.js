import Ext_Gadget from '../../../Ext/Gadget.js';

export default class Ext_calendar_view_Base extends Ext_Gadget {
  static PROPERTIES() { return [
    'addForm',
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
    'editForm',
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
    'ripple',
    'session',
    'shareableName',
    'store',
    'style',
    'timezoneOffset',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'width',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeeventadd', parameters:'sender,context'},
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
    {name:'validateeventadd', parameters:'sender,context'},
    {name:'validateeventdrop', parameters:'sender,context'},
    {name:'validateeventedit', parameters:'sender,context'},
    {name:'valuechange', parameters:'sender,context'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Base.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_view_Base.EVENTS());
    return Ext_Gadget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_view_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_view_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_view_Base.PROPERTIES()),
      events.concat(Ext_calendar_view_Base.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
