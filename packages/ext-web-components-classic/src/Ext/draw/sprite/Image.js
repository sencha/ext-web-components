import Ext_draw_sprite_Rect from '../../../Ext/draw/sprite/Rect.js';

export default class Ext_draw_sprite_Image extends Ext_draw_sprite_Rect {
  static PROPERTIES() { return [
    'animation',
    'dirty',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'globalCompositeOperation',
    'height',
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
    'radius',
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
    'src',
    'strokeOpacity',
    'strokeStyle',
    'surface',
    'transformFillStroke',
    'translation',
    'translationX',
    'translationY',
    'width',
    'x',
    'y',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Image.PROPERTIES());
    return Ext_draw_sprite_Rect.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_sprite_Image.EVENTS());
    return Ext_draw_sprite_Rect.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_sprite_Image.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_sprite_Image.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_sprite_Image.PROPERTIES()),
      events.concat(Ext_draw_sprite_Image.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
