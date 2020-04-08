import Ext_data_operation_Operation from '../../../Ext/data/operation/Operation.js';

export default class Ext_data_operation_Read extends Ext_data_operation_Operation {
  static PROPERTIES() { return [
    'addRecords',
    'batch',
    'callback',
    'filters',
    'grouper',
    'id',
    'internalCallback',
    'internalScope',
    'limit',
    'page',
    'params',
    'proxy',
    'recordCreator',
    'records',
    'request',
    'response',
    'resultSet',
    'scope',
    'sorters',
    'start',
    'synchronous',
    'url',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_operation_Read.PROPERTIES());
    return Ext_data_operation_Operation.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_operation_Read.EVENTS());
    return Ext_data_operation_Operation.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_operation_Read.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_operation_Read.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_operation_Read.PROPERTIES()),
      events.concat(Ext_data_operation_Read.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
