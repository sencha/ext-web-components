import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_HashMap extends Ext_Base {
  static PROPERTIES() { return [
    'keyFn',
    'listeners',
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
    properties = properties.concat(Ext_util_HashMap.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_HashMap.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_HashMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_HashMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_HashMap.PROPERTIES()),
      events.concat(Ext_util_HashMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
