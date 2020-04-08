import Ext_data_proxy_Proxy from '../../../Ext/data/proxy/Proxy.js';

export default class Ext_data_proxy_Server extends Ext_data_proxy_Proxy {
  static PROPERTIES() { return [
    'api',
    'batchActions',
    'batchOrder',
    'cacheString',
    'directionParam',
    'extraParams',
    'filterParam',
    'groupDirectionParam',
    'groupParam',
    'idParam',
    'limitParam',
    'listeners',
    'model',
    'noCache',
    'pageParam',
    'reader',
    'simpleGroupMode',
    'simpleSortMode',
    'sortParam',
    'startParam',
    'timeout',
    'url',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'sender,response,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_Server.PROPERTIES());
    return Ext_data_proxy_Proxy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_proxy_Server.EVENTS());
    return Ext_data_proxy_Proxy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_proxy_Server.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_proxy_Server.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_proxy_Server.PROPERTIES()),
      events.concat(Ext_data_proxy_Server.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
