import Ext_data_proxy_Client from '../../Ext/data/proxy/Client.js';

export default class Ext_data_WebStorageProxy extends Ext_data_proxy_Client {
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
    properties = properties.concat(Ext_data_WebStorageProxy.PROPERTIES());
    return Ext_data_proxy_Client.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_WebStorageProxy.EVENTS());
    return Ext_data_proxy_Client.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_WebStorageProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_WebStorageProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_WebStorageProxy.PROPERTIES()),
      events.concat(Ext_data_WebStorageProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
