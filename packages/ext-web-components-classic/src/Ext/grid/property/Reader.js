import Ext_data_reader_Reader from '../../../Ext/data/reader/Reader.js';

export default class Ext_grid_property_Reader extends Ext_data_reader_Reader {
  static PROPERTIES() { return [
    'groupRootProperty',
    'implicitIncludes',
    'keepRawData',
    'listeners',
    'messageProperty',
    'model',
    'proxy',
    'readRecordsOnFailure',
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
    properties = properties.concat(Ext_grid_property_Reader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_property_Reader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_property_Reader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_property_Reader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_property_Reader.PROPERTIES()),
      events.concat(Ext_grid_property_Reader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
