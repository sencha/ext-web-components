import Ext_draw_Surface from '../../../Ext/draw/Surface.js';

export default class Ext_draw_engine_Svg extends Ext_draw_Surface {
  static PROPERTIES() { return [
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'background',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'dirty',
    'disabled',
    'flex',
    'flipRtlText',
    'floated',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highPrecision',
    'id',
    'instanceCls',
    'itemId',
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
    'relative',
    'renderTo',
    'ripple',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforetofront', parameters:'sender'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'tofront', parameters:'sender'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_engine_Svg.PROPERTIES());
    return Ext_draw_Surface.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_engine_Svg.EVENTS());
    return Ext_draw_Surface.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_engine_Svg.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_engine_Svg.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_engine_Svg.PROPERTIES()),
      events.concat(Ext_draw_engine_Svg.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
