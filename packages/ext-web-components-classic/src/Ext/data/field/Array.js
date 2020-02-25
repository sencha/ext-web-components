import Ext_data_field_Field from '../../../Ext/data/field/Field.js';

export default class Ext_data_field_Array extends Ext_data_field_Field {
  static PROPERTIES() { return [
    'allowBlank',
    'allowNull',
    'calculate',
    'convert',
    'critical',
    'defaultValue',
    'depends',
    'itemType',
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
    properties = properties.concat(Ext_data_field_Array.PROPERTIES());
    return Ext_data_field_Field.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_field_Array.EVENTS());
    return Ext_data_field_Field.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_field_Array.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_field_Array.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_field_Array.PROPERTIES()),
      events.concat(Ext_data_field_Array.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
