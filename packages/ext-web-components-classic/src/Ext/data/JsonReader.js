import Ext_data_reader_Reader from '../../Ext/data/reader/Reader.js';

export default class Ext_data_JsonReader extends Ext_data_reader_Reader {
  static PROPERTIES() { return [
    'groupRootProperty',
    'implicitIncludes',
    'keepRawData',
    'listeners',
    'messageProperty',
    'metaProperty',
    'model',
    'preserveRawData',
    'proxy',
    'readRecordsOnFailure',
    'record',
    'rootProperty',
    'successProperty',
    'summaryRootProperty',
    'totalProperty',
    'transform',
    'typeProperty',
    'useSimpleAccessors',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'reader,response,error'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_JsonReader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_JsonReader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_JsonReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_JsonReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_JsonReader.PROPERTIES()),
      events.concat(Ext_data_JsonReader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
