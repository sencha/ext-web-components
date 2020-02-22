import Ext_draw_SurfaceBase from '../../Ext/draw/SurfaceBase.js';

export default class Ext_draw_Surface extends Ext_draw_SurfaceBase {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'background',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'dirty',
    'disabled',
    'flipRtlText',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'rect',
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
    properties = properties.concat(Ext_draw_Surface.PROPERTIES());
    return Ext_draw_SurfaceBase.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_Surface.EVENTS());
    return Ext_draw_SurfaceBase.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_Surface.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_Surface.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_Surface.PROPERTIES()),
      events.concat(Ext_draw_Surface.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
