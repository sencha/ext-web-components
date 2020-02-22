import Ext_data_proxy_Proxy from '../../Ext/data/proxy/Proxy.js';

export default class Ext_data_ClientProxy extends Ext_data_proxy_Proxy {
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
    properties = properties.concat(Ext_data_ClientProxy.PROPERTIES());
    return Ext_data_proxy_Proxy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_ClientProxy.EVENTS());
    return Ext_data_proxy_Proxy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_ClientProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_ClientProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_ClientProxy.PROPERTIES()),
      events.concat(Ext_data_ClientProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
