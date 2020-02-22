import Ext_sparkline_BarBase from '../../Ext/sparkline/BarBase.js';

export default class Ext_sparkline_TriState extends Ext_sparkline_BarBase {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'barSpacing',
    'barWidth',
    'bind',
    'border',
    'cls',
    'colorMap',
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
    'negBarColor',
    'plugins',
    'posBarColor',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
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
    'zeroBarColor',
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
    properties = properties.concat(Ext_sparkline_TriState.PROPERTIES());
    return Ext_sparkline_BarBase.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_sparkline_TriState.EVENTS());
    return Ext_sparkline_BarBase.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_sparkline_TriState.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_sparkline_TriState.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_sparkline_TriState.PROPERTIES()),
      events.concat(Ext_sparkline_TriState.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
