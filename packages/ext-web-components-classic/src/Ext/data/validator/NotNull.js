import Ext_data_validator_Presence from '../../../Ext/data/validator/Presence.js';

export default class Ext_data_validator_NotNull extends Ext_data_validator_Presence {
  static PROPERTIES() { return [
    'allowEmpty',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_NotNull.PROPERTIES());
    return Ext_data_validator_Presence.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_NotNull.EVENTS());
    return Ext_data_validator_Presence.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_NotNull.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_NotNull.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_NotNull.PROPERTIES()),
      events.concat(Ext_data_validator_NotNull.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
