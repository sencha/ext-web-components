import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_DataProxy extends Ext_Base {
  static PROPERTIES() { return [
    'batchActions',
    'batchOrder',
    'listeners',
    'model',
    'reader',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_DataProxy.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_DataProxy.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_DataProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_DataProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_DataProxy.PROPERTIES()),
      events.concat(Ext_data_DataProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
