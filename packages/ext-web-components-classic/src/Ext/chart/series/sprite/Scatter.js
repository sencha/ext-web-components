import Ext_chart_series_sprite_Cartesian from '../../../../Ext/chart/series/sprite/Cartesian.js';

export default class Ext_chart_series_sprite_Scatter extends Ext_chart_series_sprite_Cartesian {
  static PROPERTIES() { return [
    'animation',
    'dataMaxX',
    'dataMaxY',
    'dataMinX',
    'dataMinY',
    'dataX',
    'dataY',
    'dirty',
    'field',
    'fillOpacity',
    'fillStyle',
    'flipXY',
    'globalAlpha',
    'globalCompositeOperation',
    'hidden',
    'labelOverflowPadding',
    'labels',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'miterLimit',
    'parent',
    'rangeX',
    'rangeY',
    'rotation',
    'rotationCenterX',
    'rotationCenterY',
    'rotationRads',
    'scaling',
    'scalingCenterX',
    'scalingCenterY',
    'scalingX',
    'scalingY',
    'selectionTolerance',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'shadowOffsetY',
    'store',
    'strokeOpacity',
    'strokeStyle',
    'surface',
    'transformFillStroke',
    'translation',
    'translationX',
    'translationY',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Scatter.PROPERTIES());
    return Ext_chart_series_sprite_Cartesian.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Scatter.EVENTS());
    return Ext_chart_series_sprite_Cartesian.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Scatter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Scatter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Scatter.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Scatter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
