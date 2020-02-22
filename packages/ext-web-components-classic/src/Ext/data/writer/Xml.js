import Ext_data_writer_Writer from '../../../Ext/data/writer/Writer.js';

export default class Ext_data_writer_Xml extends Ext_data_writer_Writer {
  static PROPERTIES() { return [
    'allDataOptions',
    'clientIdProperty',
    'dateFormat',
    'defaultDocumentRoot',
    'documentRoot',
    'header',
    'nameProperty',
    'partialDataOptions',
    'record',
    'transform',
    'writeAllFields',
    'writeRecordId',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_writer_Xml.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_writer_Xml.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_writer_Xml.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_writer_Xml.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_writer_Xml.PROPERTIES()),
      events.concat(Ext_data_writer_Xml.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
