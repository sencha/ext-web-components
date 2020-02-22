import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

export default class Ext_data_validator_AbstractDate extends Ext_data_validator_Validator {
  static PROPERTIES() { return [
    'format',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_AbstractDate.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_AbstractDate.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_AbstractDate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_AbstractDate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_AbstractDate.PROPERTIES()),
      events.concat(Ext_data_validator_AbstractDate.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
