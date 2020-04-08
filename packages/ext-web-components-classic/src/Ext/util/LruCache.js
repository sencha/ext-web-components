import Ext_util_HashMap from '../../Ext/util/HashMap.js';

export default class Ext_util_LruCache extends Ext_util_HashMap {
  static PROPERTIES() { return [
    'keyFn',
    'listeners',
    'maxSize',
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
    properties = properties.concat(Ext_util_LruCache.PROPERTIES());
    return Ext_util_HashMap.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_LruCache.EVENTS());
    return Ext_util_HashMap.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_LruCache.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_LruCache.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_LruCache.PROPERTIES()),
      events.concat(Ext_util_LruCache.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
