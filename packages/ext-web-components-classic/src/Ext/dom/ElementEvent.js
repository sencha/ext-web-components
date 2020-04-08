import Ext_util_Event from '../../Ext/util/Event.js';

export default class Ext_dom_ElementEvent extends Ext_util_Event {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dom_ElementEvent.PROPERTIES());
    return Ext_util_Event.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dom_ElementEvent.EVENTS());
    return Ext_util_Event.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dom_ElementEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dom_ElementEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dom_ElementEvent.PROPERTIES()),
      events.concat(Ext_dom_ElementEvent.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
