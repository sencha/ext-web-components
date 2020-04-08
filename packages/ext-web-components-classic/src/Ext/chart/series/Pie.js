import Ext_chart_series_Polar from '../../../Ext/chart/series/Polar.js';

export default class Ext_chart_series_Pie extends Ext_chart_series_Polar {
  static PROPERTIES() { return [
    'angleField',
    'animation',
    'background',
    'bind',
    'center',
    'chart',
    'clockwise',
    'colors',
    'controller',
    'defaultListenerScope',
    'donut',
    'hidden',
    'highlight',
    'highlightCfg',
    'itemInstancing',
    'label',
    'labelOverflowPadding',
    'listeners',
    'marker',
    'markerSubStyle',
    'nameable',
    'offsetX',
    'offsetY',
    'overlaySurface',
    'publishes',
    'radius',
    'radiusFactor',
    'radiusField',
    'reference',
    'renderer',
    'rotation',
    'session',
    'shareableName',
    'showInLegend',
    'showMarkers',
    'store',
    'style',
    'subStyle',
    'surface',
    'theme',
    'themeStyle',
    'title',
    'tooltip',
    'totalAngle',
    'triggerAfterDraw',
    'twoWayBindable',
    'useDarkerStrokeColor',
    'viewModel',
    'xField',
    'yField',
  ]};
  static EVENTS() { return [
    {name:'chartattached', parameters:'chart,series'},
    {name:'chartdetached', parameters:'chart,series'},
    {name:'itemclick', parameters:'series,item,event'},
    {name:'itemdblclick', parameters:'series,item,event'},
    {name:'itemmousedown', parameters:'series,item,event'},
    {name:'itemmousemove', parameters:'series,item,event'},
    {name:'itemmouseout', parameters:'series,item,event'},
    {name:'itemmouseover', parameters:'series,item,event'},
    {name:'itemmouseup', parameters:'series,item,event'},
    {name:'itemtap', parameters:'series,item,event'},
    {name:'storechange', parameters:'series,newStore,oldStore'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Pie.PROPERTIES());
    return Ext_chart_series_Polar.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_Pie.EVENTS());
    return Ext_chart_series_Polar.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_Pie.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_Pie.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_Pie.PROPERTIES()),
      events.concat(Ext_chart_series_Pie.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
