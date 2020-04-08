import Ext_data_schema_Association from '../../../Ext/data/schema/Association.js';

export default class Ext_data_schema_ManyToOne extends Ext_data_schema_Association {
  static PROPERTIES() { return [
    'associationKey',
    'name',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_schema_ManyToOne.PROPERTIES());
    return Ext_data_schema_Association.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_schema_ManyToOne.EVENTS());
    return Ext_data_schema_Association.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_schema_ManyToOne.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_schema_ManyToOne.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_schema_ManyToOne.PROPERTIES()),
      events.concat(Ext_data_schema_ManyToOne.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
