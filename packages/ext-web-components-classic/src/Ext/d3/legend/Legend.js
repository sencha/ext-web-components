import Ext_Base from '../../../Ext/Base.js';

export default class Ext_d3_legend_Legend extends Ext_Base {
  static PROPERTIES() { return [
    'component',
    'docked',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_legend_Legend.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_legend_Legend.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_legend_Legend.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_legend_Legend.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_legend_Legend.PROPERTIES()),
      events.concat(Ext_d3_legend_Legend.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
