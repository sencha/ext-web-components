import Ext_draw_sprite_Text from '../../../Ext/draw/sprite/Text.js';

export default class Ext_chart_label_Label extends Ext_draw_sprite_Text {
  static PROPERTIES() { return [
    'animation',
    'calloutLine',
    'dirty',
    'field',
    'fillOpacity',
    'fillStyle',
    'font',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fx',
    'globalAlpha',
    'globalCompositeOperation',
    'hidden',
    'hideLessThan',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'miterLimit',
    'parent',
    'preciseMeasurement',
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
    'text',
    'textAlign',
    'textBaseline',
    'transformFillStroke',
    'translation',
    'translationX',
    'translationY',
    'x',
    'y',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_label_Label.PROPERTIES());
    return Ext_draw_sprite_Text.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_label_Label.EVENTS());
    return Ext_draw_sprite_Text.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_label_Label.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_label_Label.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_label_Label.PROPERTIES()),
      events.concat(Ext_chart_label_Label.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
