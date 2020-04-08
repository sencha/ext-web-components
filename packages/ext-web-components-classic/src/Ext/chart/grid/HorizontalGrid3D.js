import Ext_chart_grid_HorizontalGrid from '../../../Ext/chart/grid/HorizontalGrid.js';

export default class Ext_chart_grid_HorizontalGrid3D extends Ext_chart_grid_HorizontalGrid {
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
    properties = properties.concat(Ext_chart_grid_HorizontalGrid3D.PROPERTIES());
    return Ext_chart_grid_HorizontalGrid.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_grid_HorizontalGrid3D.EVENTS());
    return Ext_chart_grid_HorizontalGrid.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_grid_HorizontalGrid3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_grid_HorizontalGrid3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_grid_HorizontalGrid3D.PROPERTIES()),
      events.concat(Ext_chart_grid_HorizontalGrid3D.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
