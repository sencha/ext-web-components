import Ext_d3_legend_Legend from '../../../Ext/d3/legend/Legend.js';

export default class Ext_d3_legend_Color extends Ext_d3_legend_Legend {
  static PROPERTIES() { return [
    'axis',
    'component',
    'docked',
    'items',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_legend_Color.PROPERTIES());
    return Ext_d3_legend_Legend.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_legend_Color.EVENTS());
    return Ext_d3_legend_Legend.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_legend_Color.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_legend_Color.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_legend_Color.PROPERTIES()),
      events.concat(Ext_d3_legend_Color.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
