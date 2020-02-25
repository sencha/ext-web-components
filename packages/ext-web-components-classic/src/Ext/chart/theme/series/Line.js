import Ext_chart_theme_series_Series from '../../../../Ext/chart/theme/series/Series.js';

export default class Ext_chart_theme_series_Line extends Ext_chart_theme_series_Series {
  static PROPERTIES() { return [
    'curve',
    'fillArea',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'labelOverflowPadding',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'nullStyle',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'strokeOpacity',
    'strokeStyle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_series_Line.PROPERTIES());
    return Ext_chart_theme_series_Series.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_theme_series_Line.EVENTS());
    return Ext_chart_theme_series_Series.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_theme_series_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_theme_series_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_theme_series_Line.PROPERTIES()),
      events.concat(Ext_chart_theme_series_Line.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
