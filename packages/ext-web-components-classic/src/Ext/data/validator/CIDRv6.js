import Ext_data_validator_Format from '../../../Ext/data/validator/Format.js';

export default class Ext_data_validator_CIDRv6 extends Ext_data_validator_Format {
  static PROPERTIES() { return [
    'matcher',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_CIDRv6.PROPERTIES());
    return Ext_data_validator_Format.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_CIDRv6.EVENTS());
    return Ext_data_validator_Format.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_CIDRv6.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_CIDRv6.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_CIDRv6.PROPERTIES()),
      events.concat(Ext_data_validator_CIDRv6.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
