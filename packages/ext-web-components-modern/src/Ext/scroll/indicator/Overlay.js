import Ext_scroll_indicator_Indicator from '../../../Ext/scroll/indicator/Indicator.js';

export default class Ext_scroll_indicator_Overlay extends Ext_scroll_indicator_Indicator {
  static PROPERTIES() { return [
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'axis',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'disabled',
    'enabled',
    'flex',
    'floated',
    'focusCls',
    'height',
    'hidden',
    'hideAnimation',
    'hideDelay',
    'hideMode',
    'id',
    'instanceCls',
    'itemId',
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
    'relative',
    'renderTo',
    'ripple',
    'scroller',
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
    'value',
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
    properties = properties.concat(Ext_scroll_indicator_Overlay.PROPERTIES());
    return Ext_scroll_indicator_Indicator.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_scroll_indicator_Overlay.EVENTS());
    return Ext_scroll_indicator_Indicator.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_scroll_indicator_Overlay.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_scroll_indicator_Overlay.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_scroll_indicator_Overlay.PROPERTIES()),
      events.concat(Ext_scroll_indicator_Overlay.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
