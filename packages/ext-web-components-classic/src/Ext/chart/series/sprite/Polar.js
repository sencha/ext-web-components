import Ext_chart_series_sprite_Series from '../../../../Ext/chart/series/sprite/Series.js';

export default class Ext_chart_series_sprite_Polar extends Ext_chart_series_sprite_Series {
  static PROPERTIES() { return [
    'animation',
    'baseRotation',
    'centerX',
    'centerY',
    'dataMaxX',
    'dataMaxY',
    'dataMinX',
    'dataMinY',
    'dataX',
    'dataY',
    'dirty',
    'endAngle',
    'endRho',
    'field',
    'fillOpacity',
    'fillStyle',
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
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'shadowOffsetY',
    'startAngle',
    'startRho',
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
    properties = properties.concat(Ext_chart_series_sprite_Polar.PROPERTIES());
    return Ext_chart_series_sprite_Series.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Polar.EVENTS());
    return Ext_chart_series_sprite_Series.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Polar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Polar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Polar.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Polar.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
