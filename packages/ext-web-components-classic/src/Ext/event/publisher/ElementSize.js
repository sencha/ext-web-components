import Ext_event_publisher_Publisher from '../../../Ext/event/publisher/Publisher.js';

export default class Ext_event_publisher_ElementSize extends Ext_event_publisher_Publisher {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_ElementSize.PROPERTIES());
    return Ext_event_publisher_Publisher.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_publisher_ElementSize.EVENTS());
    return Ext_event_publisher_Publisher.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_publisher_ElementSize.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_publisher_ElementSize.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_publisher_ElementSize.PROPERTIES()),
      events.concat(Ext_event_publisher_ElementSize.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
