import Ext_d3_HeatMap from '../../../Ext/d3/HeatMap.js';

export default class Ext_pivot_d3_HeatMap extends Ext_d3_HeatMap {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'clipScene',
    'cls',
    'colorAxis',
    'componentCls',
    'controller',
    'defaultFormatter',
    'defaultListenerScope',
    'disabled',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'interactions',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labels',
    'legend',
    'listeners',
    'margin',
    'matrix',
    'name',
    'nameable',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'size',
    'store',
    'style',
    'tiles',
    'tooltip',
    'touchAction',
    'transitions',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'xAxis',
    'yAxis',
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
    {name:'sceneresize', parameters:'component,scene,size'},
    {name:'scenesetup', parameters:'component,scene'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_d3_HeatMap.PROPERTIES());
    return Ext_d3_HeatMap.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_d3_HeatMap.EVENTS());
    return Ext_d3_HeatMap.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_d3_HeatMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_d3_HeatMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_d3_HeatMap.PROPERTIES()),
      events.concat(Ext_pivot_d3_HeatMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
