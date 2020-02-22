import Ext_app_bind_AbstractStub from '../../../Ext/app/bind/AbstractStub.js';

export default class Ext_app_bind_RootStub extends Ext_app_bind_AbstractStub {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_bind_RootStub.PROPERTIES());
    return Ext_app_bind_AbstractStub.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_bind_RootStub.EVENTS());
    return Ext_app_bind_AbstractStub.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_bind_RootStub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_bind_RootStub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_bind_RootStub.PROPERTIES()),
      events.concat(Ext_app_bind_RootStub.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
