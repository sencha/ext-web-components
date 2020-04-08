import Ext_chart_series_Polar from '../../../Ext/chart/series/Polar.js';

export default class Ext_chart_series_Gauge extends Ext_chart_series_Polar {
  static PROPERTIES() { return [
    'angleField',
    'animation',
    'background',
    'bind',
    'center',
    'chart',
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
    'maximum',
    'minimum',
    'nameable',
    'needle',
    'needleLength',
    'needleWidth',
    'offsetX',
    'offsetY',
    'overlaySurface',
    'publishes',
    'radius',
    'radiusField',
    'reference',
    'renderer',
    'rotation',
    'sectors',
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
    'value',
    'viewModel',
    'wholeDisk',
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
    properties = properties.concat(Ext_chart_series_Gauge.PROPERTIES());
    return Ext_chart_series_Polar.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_Gauge.EVENTS());
    return Ext_chart_series_Polar.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_Gauge.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_Gauge.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_Gauge.PROPERTIES()),
      events.concat(Ext_chart_series_Gauge.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
