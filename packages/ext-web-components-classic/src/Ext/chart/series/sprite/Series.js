import Ext_draw_sprite_Sprite from '../../../../Ext/draw/sprite/Sprite.js';

export default class Ext_chart_series_sprite_Series extends Ext_draw_sprite_Sprite {
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
    properties = properties.concat(Ext_chart_series_sprite_Series.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Series.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Series.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Series.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Series.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Series.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
