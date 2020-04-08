import Ext_data_validator_Number from '../../../Ext/data/validator/Number.js';

export default class Ext_data_validator_Currency extends Ext_data_validator_Number {
  static PROPERTIES() { return [
    'decimalSeparator',
    'message',
    'spacer',
    'symbol',
    'symbolAtEnd',
    'thousandSeparator',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Currency.PROPERTIES());
    return Ext_data_validator_Number.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_Currency.EVENTS());
    return Ext_data_validator_Number.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_Currency.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_Currency.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_Currency.PROPERTIES()),
      events.concat(Ext_data_validator_Currency.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
