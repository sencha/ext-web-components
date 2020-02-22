import Ext_chart_series_sprite_Bar from '../../../../Ext/chart/series/sprite/Bar.js';

export default class Ext_chart_series_sprite_Bar3D extends Ext_chart_series_sprite_Bar {
  static PROPERTIES() { return [
    'animation',
    'brightnessFactor',
    'colorSpread',
    'dataMaxX',
    'dataMaxY',
    'dataMinX',
    'dataMinY',
    'dataStartY',
    'dataX',
    'dataY',
    'dirty',
    'field',
    'fillOpacity',
    'fillStyle',
    'flipXY',
    'globalAlpha',
    'globalCompositeOperation',
    'groupCount',
    'groupOffset',
    'hidden',
    'inGroupGapWidth',
    'labelOverflowPadding',
    'labels',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'maxBarWidth',
    'minBarWidth',
    'minGapWidth',
    'miterLimit',
    'parent',
    'radius',
    'rangeX',
    'rangeY',
    'rotation',
    'rotationCenterX',
    'rotationCenterY',
    'rotationRads',
    'saturationFactor',
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
    properties = properties.concat(Ext_chart_series_sprite_Bar3D.PROPERTIES());
    return Ext_chart_series_sprite_Bar.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Bar3D.EVENTS());
    return Ext_chart_series_sprite_Bar.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Bar3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Bar3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Bar3D.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Bar3D.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
