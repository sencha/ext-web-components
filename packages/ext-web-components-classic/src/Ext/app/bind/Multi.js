import Ext_app_bind_BaseBinding from '../../../Ext/app/bind/BaseBinding.js';

export default class Ext_app_bind_Multi extends Ext_app_bind_BaseBinding {
  static PROPERTIES() { return [
    'single',
    'trackStatics',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Multi.PROPERTIES());
    return Ext_app_bind_BaseBinding.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_bind_Multi.EVENTS());
    return Ext_app_bind_BaseBinding.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_bind_Multi.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_bind_Multi.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_bind_Multi.PROPERTIES()),
      events.concat(Ext_app_bind_Multi.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
