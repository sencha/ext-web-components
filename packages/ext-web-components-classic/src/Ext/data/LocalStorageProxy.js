import Ext_data_proxy_WebStorage from '../../Ext/data/proxy/WebStorage.js';

export default class Ext_data_LocalStorageProxy extends Ext_data_proxy_WebStorage {
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
    properties = properties.concat(Ext_data_LocalStorageProxy.PROPERTIES());
    return Ext_data_proxy_WebStorage.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_LocalStorageProxy.EVENTS());
    return Ext_data_proxy_WebStorage.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_LocalStorageProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_LocalStorageProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_LocalStorageProxy.PROPERTIES()),
      events.concat(Ext_data_LocalStorageProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
