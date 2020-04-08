import Ext_Base from '../../Ext/Base.js';

export default class Ext_direct_Transaction extends Ext_Base {
  static PROPERTIES() { return [
    'provider',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_Transaction.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_Transaction.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_Transaction.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_Transaction.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_Transaction.PROPERTIES()),
      events.concat(Ext_direct_Transaction.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
