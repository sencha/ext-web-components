import Ext_draw_sprite_Circle from '../../../Ext/draw/sprite/Circle.js';

export default class Ext_chart_grid_CircularGrid extends Ext_draw_sprite_Circle {
  static PROPERTIES() { return [
    'animation',
    'cx',
    'cy',
    'dirty',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'globalCompositeOperation',
    'hidden',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'miterLimit',
    'parent',
    'path',
    'r',
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
    properties = properties.concat(Ext_chart_grid_CircularGrid.PROPERTIES());
    return Ext_draw_sprite_Circle.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_grid_CircularGrid.EVENTS());
    return Ext_draw_sprite_Circle.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_grid_CircularGrid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_grid_CircularGrid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_grid_CircularGrid.PROPERTIES()),
      events.concat(Ext_chart_grid_CircularGrid.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
