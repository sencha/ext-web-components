import Ext_app_EventDomain from '../../../Ext/app/EventDomain.js';

export default class Ext_app_domain_Store extends Ext_app_EventDomain {
  static PROPERTIES() { return [
    'idProperty',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_domain_Store.PROPERTIES());
    return Ext_app_EventDomain.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_domain_Store.EVENTS());
    return Ext_app_EventDomain.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_domain_Store.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_domain_Store.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_domain_Store.PROPERTIES()),
      events.concat(Ext_app_domain_Store.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
