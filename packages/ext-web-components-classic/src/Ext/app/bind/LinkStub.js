import Ext_app_bind_Stub from '../../../Ext/app/bind/Stub.js';

export default class Ext_app_bind_LinkStub extends Ext_app_bind_Stub {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_bind_LinkStub.PROPERTIES());
    return Ext_app_bind_Stub.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_bind_LinkStub.EVENTS());
    return Ext_app_bind_Stub.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_bind_LinkStub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_bind_LinkStub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_bind_LinkStub.PROPERTIES()),
      events.concat(Ext_app_bind_LinkStub.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
