import Ext_util_LruCache from '../../Ext/util/LruCache.js';

export default class Ext_data_PageMap extends Ext_util_LruCache {
  static PROPERTIES() { return [
    'keyFn',
    'listeners',
    'maxSize',
    'pageSize',
    'rootProperty',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'sender,key,value'},
    {name:'clear', parameters:'sender'},
    {name:'remove', parameters:'sender,key,value'},
    {name:'replace', parameters:'sender,key,value,old'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_PageMap.PROPERTIES());
    return Ext_util_LruCache.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_PageMap.EVENTS());
    return Ext_util_LruCache.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_PageMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_PageMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_PageMap.PROPERTIES()),
      events.concat(Ext_data_PageMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
