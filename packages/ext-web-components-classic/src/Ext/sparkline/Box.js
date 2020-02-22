import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

export default class Ext_sparkline_Box extends Ext_sparkline_Base {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'boxFillColor',
    'boxLineColor',
    'chartRangeMax',
    'chartRangeMin',
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
    'medianColor',
    'name',
    'nameable',
    'outlierFillColor',
    'outlierIQR',
    'outlierLineColor',
    'plugins',
    'publishes',
    'raw',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'showOutliers',
    'spotRadius',
    'style',
    'target',
    'targetColor',
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
    'whiskerColor',
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
    properties = properties.concat(Ext_sparkline_Box.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_sparkline_Box.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_sparkline_Box.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_sparkline_Box.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_sparkline_Box.PROPERTIES()),
      events.concat(Ext_sparkline_Box.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
