import Ext_dom_Underlay from '../../Ext/dom/Underlay.js';

export default class Ext_dom_Shadow extends Ext_dom_Underlay {
  static PROPERTIES() { return [
    'mode',
    'offset',
    'target',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dom_Shadow.PROPERTIES());
    return Ext_dom_Underlay.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dom_Shadow.EVENTS());
    return Ext_dom_Underlay.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dom_Shadow.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dom_Shadow.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dom_Shadow.PROPERTIES()),
      events.concat(Ext_dom_Shadow.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
