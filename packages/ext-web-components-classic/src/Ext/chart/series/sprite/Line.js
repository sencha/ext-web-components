import Ext_chart_series_sprite_Aggregative from '../../../../Ext/chart/series/sprite/Aggregative.js';

export default class Ext_chart_series_sprite_Line extends Ext_chart_series_sprite_Aggregative {
  static PROPERTIES() { return [
    'animation',
    'curve',
    'dataClose',
    'dataHigh',
    'dataLow',
    'dataMaxX',
    'dataMaxY',
    'dataMinX',
    'dataMinY',
    'dataOpen',
    'dataX',
    'dataY',
    'dirty',
    'field',
    'fillArea',
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
    'nullStyle',
    'parent',
    'preciseStroke',
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
    'yCap',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Line.PROPERTIES());
    return Ext_chart_series_sprite_Aggregative.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Line.EVENTS());
    return Ext_chart_series_sprite_Aggregative.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Line.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Line.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
