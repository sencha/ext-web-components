import Ext_data_reader_Json from '../../Ext/data/reader/Json.js';

export default class Ext_data_ArrayReader extends Ext_data_reader_Json {
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
    properties = properties.concat(Ext_data_ArrayReader.PROPERTIES());
    return Ext_data_reader_Json.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_ArrayReader.EVENTS());
    return Ext_data_reader_Json.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_ArrayReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_ArrayReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_ArrayReader.PROPERTIES()),
      events.concat(Ext_data_ArrayReader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
