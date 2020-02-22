import Ext_data_summary_Sum from '../../../Ext/data/summary/Sum.js';

export default class Ext_data_summary_Average extends Ext_data_summary_Sum {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Average.PROPERTIES());
    return Ext_data_summary_Sum.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_summary_Average.EVENTS());
    return Ext_data_summary_Sum.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_summary_Average.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_summary_Average.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_summary_Average.PROPERTIES()),
      events.concat(Ext_data_summary_Average.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
