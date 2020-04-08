import Ext_Gadget from '../../../Ext/Gadget.js';

export default class Ext_ux_rating_Picker extends Ext_Gadget {
  static PROPERTIES() { return [
    'animate',
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
    'family',
    'focusCls',
    'glyphs',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'limit',
    'listeners',
    'margin',
    'minimum',
    'name',
    'nameable',
    'overStyle',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'rounding',
    'scale',
    'selectedStyle',
    'session',
    'shareableName',
    'style',
    'tip',
    'tooltipText',
    'touchAction',
    'trackingValue',
    'trackOver',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
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
    properties = properties.concat(Ext_ux_rating_Picker.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_rating_Picker.EVENTS());
    return Ext_Gadget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_rating_Picker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_rating_Picker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_rating_Picker.PROPERTIES()),
      events.concat(Ext_ux_rating_Picker.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
