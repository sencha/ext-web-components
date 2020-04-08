import Ext_data_identifier_Generator from '../../../Ext/data/identifier/Generator.js';

export default class Ext_data_identifier_Sequential extends Ext_data_identifier_Generator {
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
    properties = properties.concat(Ext_data_identifier_Sequential.PROPERTIES());
    return Ext_data_identifier_Generator.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_identifier_Sequential.EVENTS());
    return Ext_data_identifier_Generator.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_identifier_Sequential.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_identifier_Sequential.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_identifier_Sequential.PROPERTIES()),
      events.concat(Ext_data_identifier_Sequential.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
