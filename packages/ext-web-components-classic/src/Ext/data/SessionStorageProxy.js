import Ext_data_proxy_WebStorage from '../../Ext/data/proxy/WebStorage.js';

export default class Ext_data_SessionStorageProxy extends Ext_data_proxy_WebStorage {
  static PROPERTIES() { return [
    'batchActions',
    'batchOrder',
    'id',
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
    properties = properties.concat(Ext_data_SessionStorageProxy.PROPERTIES());
    return Ext_data_proxy_WebStorage.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_SessionStorageProxy.EVENTS());
    return Ext_data_proxy_WebStorage.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_SessionStorageProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_SessionStorageProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_SessionStorageProxy.PROPERTIES()),
      events.concat(Ext_data_SessionStorageProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
