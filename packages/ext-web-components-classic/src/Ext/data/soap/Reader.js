import Ext_data_reader_Xml from '../../../Ext/data/reader/Xml.js';

export default class Ext_data_soap_Reader extends Ext_data_reader_Xml {
  static PROPERTIES() { return [
    'groupRootProperty',
    'implicitIncludes',
    'keepRawData',
    'listeners',
    'messageProperty',
    'model',
    'namespace',
    'proxy',
    'readRecordsOnFailure',
    'record',
    'rootProperty',
    'successProperty',
    'summaryRootProperty',
    'totalProperty',
    'transform',
    'typeProperty',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'reader,response,error'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_soap_Reader.PROPERTIES());
    return Ext_data_reader_Xml.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_soap_Reader.EVENTS());
    return Ext_data_reader_Xml.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_soap_Reader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_soap_Reader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_soap_Reader.PROPERTIES()),
      events.concat(Ext_data_soap_Reader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
