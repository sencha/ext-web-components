import Ext_data_validator_List from '../../../Ext/data/validator/List.js';

export default class Ext_data_validator_Exclusion extends Ext_data_validator_List {
  static PROPERTIES() { return [
    'list',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Exclusion.PROPERTIES());
    return Ext_data_validator_List.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_Exclusion.EVENTS());
    return Ext_data_validator_List.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_Exclusion.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_Exclusion.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_Exclusion.PROPERTIES()),
      events.concat(Ext_data_validator_Exclusion.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
