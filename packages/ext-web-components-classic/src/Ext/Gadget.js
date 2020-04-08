import Ext_Evented from '../Ext/Evented.js';

export default class Ext_Gadget extends Ext_Evented {
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
    'disabled',
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
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
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
    properties = properties.concat(Ext_Gadget.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Gadget.EVENTS());
    return Ext_Evented.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Gadget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Gadget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Gadget.PROPERTIES()),
      events.concat(Ext_Gadget.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
