import Ext_promise_Deferred from '../Ext/promise/Deferred.js';

export default class Ext_Deferred extends Ext_promise_Deferred {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Deferred.PROPERTIES());
    return Ext_promise_Deferred.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Deferred.EVENTS());
    return Ext_promise_Deferred.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Deferred.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Deferred.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Deferred.PROPERTIES()),
      events.concat(Ext_Deferred.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
