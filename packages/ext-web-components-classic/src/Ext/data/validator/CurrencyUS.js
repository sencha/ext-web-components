import Ext_data_validator_Currency from '../../../Ext/data/validator/Currency.js';

export default class Ext_data_validator_CurrencyUS extends Ext_data_validator_Currency {
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
    properties = properties.concat(Ext_data_validator_CurrencyUS.PROPERTIES());
    return Ext_data_validator_Currency.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_CurrencyUS.EVENTS());
    return Ext_data_validator_Currency.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_CurrencyUS.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_CurrencyUS.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_CurrencyUS.PROPERTIES()),
      events.concat(Ext_data_validator_CurrencyUS.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
