import Ext_data_validator_AbstractDate from '../../../Ext/data/validator/AbstractDate.js';

export default class Ext_data_validator_Time extends Ext_data_validator_AbstractDate {
  static PROPERTIES() { return [
    'format',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Time.PROPERTIES());
    return Ext_data_validator_AbstractDate.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_Time.EVENTS());
    return Ext_data_validator_AbstractDate.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_Time.PROPERTIES()),
      events.concat(Ext_data_validator_Time.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
