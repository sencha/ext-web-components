import Ext_data_identifier_Sequential from '../../../Ext/data/identifier/Sequential.js';

export default class Ext_data_identifier_Negative extends Ext_data_identifier_Sequential {
  static PROPERTIES() { return [
    'id',
    'increment',
    'prefix',
    'seed',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_identifier_Negative.PROPERTIES());
    return Ext_data_identifier_Sequential.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_identifier_Negative.EVENTS());
    return Ext_data_identifier_Sequential.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_identifier_Negative.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_identifier_Negative.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_identifier_Negative.PROPERTIES()),
      events.concat(Ext_data_identifier_Negative.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
