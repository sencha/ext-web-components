import Ext_data_identifier_Generator from '../../../Ext/data/identifier/Generator.js';

export default class Ext_data_identifier_Uuid extends Ext_data_identifier_Generator {
  static PROPERTIES() { return [
    'clockSeq',
    'id',
    'salt',
    'timestamp',
    'version',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_identifier_Uuid.PROPERTIES());
    return Ext_data_identifier_Generator.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_identifier_Uuid.EVENTS());
    return Ext_data_identifier_Generator.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_identifier_Uuid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_identifier_Uuid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_identifier_Uuid.PROPERTIES()),
      events.concat(Ext_data_identifier_Uuid.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
