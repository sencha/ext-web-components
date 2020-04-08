import Ext_draw_sprite_Path from '../../../../Ext/draw/sprite/Path.js';

export default class Ext_chart_series_sprite_Pie3DPart extends Ext_draw_sprite_Path {
  static PROPERTIES() { return [
    'animation',
    'baseColor',
    'baseRotation',
    'bevelWidth',
    'centerX',
    'centerY',
    'colorSpread',
    'dirty',
    'distortion',
    'endAngle',
    'endRho',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'globalCompositeOperation',
    'hidden',
    'label',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'margin',
    'miterLimit',
    'parent',
    'part',
    'path',
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
    'strokeOpacity',
    'strokeStyle',
    'surface',
    'thickness',
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
    properties = properties.concat(Ext_chart_series_sprite_Pie3DPart.PROPERTIES());
    return Ext_draw_sprite_Path.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Pie3DPart.EVENTS());
    return Ext_draw_sprite_Path.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Pie3DPart.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Pie3DPart.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Pie3DPart.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Pie3DPart.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
