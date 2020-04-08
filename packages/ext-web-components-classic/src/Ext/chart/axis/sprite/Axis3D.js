import Ext_chart_axis_sprite_Axis from '../../../../Ext/chart/axis/sprite/Axis.js';

export default class Ext_chart_axis_sprite_Axis3D extends Ext_chart_axis_sprite_Axis {
  static PROPERTIES() { return [
    'animation',
    'axis',
    'axisLine',
    'baseRotation',
    'centerX',
    'centerY',
    'dataMax',
    'dataMin',
    'dirty',
    'endGap',
    'enlargeEstStepSizeByText',
    'estStepSize',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'globalCompositeOperation',
    'grid',
    'hidden',
    'label',
    'labelOffset',
    'layout',
    'layoutContext',
    'length',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'majorTicks',
    'majorTickSize',
    'max',
    'min',
    'minorTicks',
    'minorTickSize',
    'minStepSize',
    'miterLimit',
    'parent',
    'position',
    'radius',
    'renderer',
    'rotation',
    'rotationCenterX',
    'rotationCenterY',
    'rotationRads',
    'scaling',
    'scalingCenterX',
    'scalingCenterY',
    'scalingX',
    'scalingY',
    'segmenter',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'shadowOffsetY',
    'startGap',
    'strokeOpacity',
    'strokeStyle',
    'surface',
    'textPadding',
    'transformFillStroke',
    'translation',
    'translationX',
    'translationY',
    'visibleMax',
    'visibleMin',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_sprite_Axis3D.PROPERTIES());
    return Ext_chart_axis_sprite_Axis.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_sprite_Axis3D.EVENTS());
    return Ext_chart_axis_sprite_Axis.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_sprite_Axis3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_sprite_Axis3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_sprite_Axis3D.PROPERTIES()),
      events.concat(Ext_chart_axis_sprite_Axis3D.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
