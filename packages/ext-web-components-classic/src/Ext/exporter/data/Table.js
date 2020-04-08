import Ext_exporter_data_Group from '../../../Ext/exporter/data/Group.js';

export default class Ext_exporter_data_Table extends Ext_exporter_data_Group {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'columns',
    'groups',
    'id',
    'idPrefix',
    'rows',
    'summaries',
    'summary',
    'text',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_data_Table.PROPERTIES());
    return Ext_exporter_data_Group.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_data_Table.EVENTS());
    return Ext_exporter_data_Group.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_data_Table.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_data_Table.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_data_Table.PROPERTIES()),
      events.concat(Ext_exporter_data_Table.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
