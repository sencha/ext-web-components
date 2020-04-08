import Ext_draw_sprite_Ellipse from '../../../Ext/draw/sprite/Ellipse.js';

export default class Ext_draw_sprite_EllipticalArc extends Ext_draw_sprite_Ellipse {
  static PROPERTIES() { return [
    'animation',
    'anticlockwise',
    'axisRotation',
    'cx',
    'cy',
    'dirty',
    'endAngle',
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
    'rotation',
    'rotationCenterX',
    'rotationCenterY',
    'rotationRads',
    'rx',
    'ry',
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
    properties = properties.concat(Ext_draw_sprite_EllipticalArc.PROPERTIES());
    return Ext_draw_sprite_Ellipse.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_sprite_EllipticalArc.EVENTS());
    return Ext_draw_sprite_Ellipse.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_sprite_EllipticalArc.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_sprite_EllipticalArc.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_sprite_EllipticalArc.PROPERTIES()),
      events.concat(Ext_draw_sprite_EllipticalArc.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
