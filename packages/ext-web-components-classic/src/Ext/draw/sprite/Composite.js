import Ext_draw_sprite_Sprite from '../../../Ext/draw/sprite/Sprite.js';

export default class Ext_draw_sprite_Composite extends Ext_draw_sprite_Sprite {
  static PROPERTIES() { return [
    'animation',
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
    properties = properties.concat(Ext_draw_sprite_Composite.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_sprite_Composite.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_sprite_Composite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_sprite_Composite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_sprite_Composite.PROPERTIES()),
      events.concat(Ext_draw_sprite_Composite.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
