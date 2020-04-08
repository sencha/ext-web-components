import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

export default class Ext_sparkline_Bullet extends Ext_sparkline_Base {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'base',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'listeners',
    'margin',
    'name',
    'nameable',
    'performanceColor',
    'plugins',
    'publishes',
    'rangeColors',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
    'targetColor',
    'targetWidth',
    'tipTpl',
    'tooltipPrefix',
    'tooltipSkipNull',
    'tooltipSuffix',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'values',
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
    properties = properties.concat(Ext_sparkline_Bullet.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_sparkline_Bullet.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_sparkline_Bullet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_sparkline_Bullet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_sparkline_Bullet.PROPERTIES()),
      events.concat(Ext_sparkline_Bullet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
