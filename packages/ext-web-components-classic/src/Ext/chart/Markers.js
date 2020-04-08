import Ext_draw_sprite_Instancing from '../../Ext/draw/sprite/Instancing.js';

export default class Ext_chart_Markers extends Ext_draw_sprite_Instancing {
  static PROPERTIES() { return [
    'animation',
    'dirty',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'globalCompositeOperation',
    'hidden',
    'instances',
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
    'template',
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
    properties = properties.concat(Ext_chart_Markers.PROPERTIES());
    return Ext_draw_sprite_Instancing.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_Markers.EVENTS());
    return Ext_draw_sprite_Instancing.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_Markers.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_Markers.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_Markers.PROPERTIES()),
      events.concat(Ext_chart_Markers.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
