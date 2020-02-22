import Ext_data_validator_Bound from '../../../Ext/data/validator/Bound.js';

export default class Ext_data_validator_Length extends Ext_data_validator_Bound {
  static PROPERTIES() { return [
    'bothMessage',
    'emptyMessage',
    'max',
    'maxOnlyMessage',
    'min',
    'minOnlyMessage',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Length.PROPERTIES());
    return Ext_data_validator_Bound.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_Length.EVENTS());
    return Ext_data_validator_Bound.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_Length.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_Length.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_Length.PROPERTIES()),
      events.concat(Ext_data_validator_Length.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
