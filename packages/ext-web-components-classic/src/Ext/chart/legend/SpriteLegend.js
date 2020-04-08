import Ext_Base from '../../../Ext/Base.js';

export default class Ext_chart_legend_SpriteLegend extends Ext_Base {
  static PROPERTIES() { return [
    'background',
    'border',
    'chart',
    'docked',
    'hidden',
    'listeners',
    'marker',
    'padding',
    'size',
    'store',
    'surface',
    'toggleable',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_SpriteLegend.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_legend_SpriteLegend.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_legend_SpriteLegend.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_legend_SpriteLegend.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_legend_SpriteLegend.PROPERTIES()),
      events.concat(Ext_chart_legend_SpriteLegend.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
