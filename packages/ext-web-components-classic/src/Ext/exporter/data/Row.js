import Ext_exporter_data_Base from '../../../Ext/exporter/data/Base.js';

export default class Ext_exporter_data_Row extends Ext_exporter_data_Base {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'cells',
    'id',
    'idPrefix',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_data_Row.PROPERTIES());
    return Ext_exporter_data_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_data_Row.EVENTS());
    return Ext_exporter_data_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_data_Row.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_data_Row.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_data_Row.PROPERTIES()),
      events.concat(Ext_exporter_data_Row.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
