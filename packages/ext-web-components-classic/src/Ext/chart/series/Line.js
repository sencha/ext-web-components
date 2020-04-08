import Ext_chart_series_Cartesian from '../../../Ext/chart/series/Cartesian.js';

export default class Ext_chart_series_Line extends Ext_chart_series_Cartesian {
  static PROPERTIES() { return [
    'animation',
    'background',
    'bind',
    'chart',
    'colors',
    'controller',
    'curve',
    'defaultListenerScope',
    'fill',
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
    'nullStyle',
    'overlaySurface',
    'publishes',
    'reference',
    'renderer',
    'selectionTolerance',
    'session',
    'shareableName',
    'showInLegend',
    'showMarkers',
    'store',
    'style',
    'style',
    'subStyle',
    'surface',
    'theme',
    'themeStyle',
    'title',
    'tooltip',
    'triggerAfterDraw',
    'twoWayBindable',
    'useDarkerStrokeColor',
    'viewModel',
    'xAxis',
    'xField',
    'yAxis',
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
    properties = properties.concat(Ext_chart_series_Line.PROPERTIES());
    return Ext_chart_series_Cartesian.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_Line.EVENTS());
    return Ext_chart_series_Cartesian.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_Line.PROPERTIES()),
      events.concat(Ext_chart_series_Line.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
