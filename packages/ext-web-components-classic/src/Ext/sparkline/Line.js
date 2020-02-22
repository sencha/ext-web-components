import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

export default class Ext_sparkline_Line extends Ext_sparkline_Base {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'chartRangeMax',
    'chartRangeMaxX',
    'chartRangeMin',
    'chartRangeMinX',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'drawNormalOnTop',
    'fillColor',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'highlightLineColor',
    'highlightSpotColor',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'lineWidth',
    'listeners',
    'margin',
    'maxSpotColor',
    'minSpotColor',
    'name',
    'nameable',
    'normalRangeColor',
    'normalRangeMax',
    'normalRangeMin',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'spotColor',
    'spotRadius',
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
    'valueSpots',
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
    properties = properties.concat(Ext_sparkline_Line.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_sparkline_Line.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_sparkline_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_sparkline_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_sparkline_Line.PROPERTIES()),
      events.concat(Ext_sparkline_Line.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
