import Ext_data_proxy_Memory from '../../Ext/data/proxy/Memory.js';

export default class Ext_data_PagingMemoryProxy extends Ext_data_proxy_Memory {
  static PROPERTIES() { return [
    'batchActions',
    'batchOrder',
    'clearOnRead',
    'data',
    'enablePaging',
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
    properties = properties.concat(Ext_data_PagingMemoryProxy.PROPERTIES());
    return Ext_data_proxy_Memory.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_PagingMemoryProxy.EVENTS());
    return Ext_data_proxy_Memory.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_PagingMemoryProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_PagingMemoryProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_PagingMemoryProxy.PROPERTIES()),
      events.concat(Ext_data_PagingMemoryProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
