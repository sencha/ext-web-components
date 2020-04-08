import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

export default class Ext_data_summary_Max extends Ext_data_summary_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Max.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_summary_Max.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_summary_Max.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_summary_Max.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_summary_Max.PROPERTIES()),
      events.concat(Ext_data_summary_Max.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
