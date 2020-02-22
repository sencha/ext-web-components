import Ext_data_field_Integer from '../../../Ext/data/field/Integer.js';

export default class Ext_data_field_Number extends Ext_data_field_Integer {
  static PROPERTIES() { return [
    'allowBlank',
    'allowNull',
    'calculate',
    'convert',
    'critical',
    'defaultValue',
    'depends',
    'mapping',
    'name',
    'persist',
    'reference',
    'serialize',
    'sortType',
    'summary',
    'summaryField',
    'unique',
    'validators',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_field_Number.PROPERTIES());
    return Ext_data_field_Integer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_field_Number.EVENTS());
    return Ext_data_field_Integer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_field_Number.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_field_Number.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_field_Number.PROPERTIES()),
      events.concat(Ext_data_field_Number.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
