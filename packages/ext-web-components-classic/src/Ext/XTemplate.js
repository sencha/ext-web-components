import Ext_Template from '../Ext/Template.js';

export default class Ext_XTemplate extends Ext_Template {
  static PROPERTIES() { return [
    'compiled',
    'definitions',
    'disableFormats',
    'strict',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_XTemplate.PROPERTIES());
    return Ext_Template.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_XTemplate.EVENTS());
    return Ext_Template.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_XTemplate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_XTemplate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_XTemplate.PROPERTIES()),
      events.concat(Ext_XTemplate.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
