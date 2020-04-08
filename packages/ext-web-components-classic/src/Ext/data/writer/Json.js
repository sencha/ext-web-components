import Ext_data_writer_Writer from '../../../Ext/data/writer/Writer.js';

export default class Ext_data_writer_Json extends Ext_data_writer_Writer {
  static PROPERTIES() { return [
    'allDataOptions',
    'allowSingle',
    'clientIdProperty',
    'dateFormat',
    'encode',
    'expandData',
    'nameProperty',
    'partialDataOptions',
    'rootProperty',
    'transform',
    'writeAllFields',
    'writeRecordId',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_writer_Json.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_writer_Json.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_writer_Json.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_writer_Json.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_writer_Json.PROPERTIES()),
      events.concat(Ext_data_writer_Json.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
