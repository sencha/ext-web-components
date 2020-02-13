import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_DataReader extends Ext_Base {
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
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_DataReader.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_DataReader.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_DataReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_DataReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_DataReader.PROPERTIES()),
      events.concat(Ext_data_DataReader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
