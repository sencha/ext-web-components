import Ext_event_publisher_Publisher from '../../../Ext/event/publisher/Publisher.js';

export default class Ext_event_publisher_ElementPaint extends Ext_event_publisher_Publisher {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_ElementPaint.PROPERTIES());
    return Ext_event_publisher_Publisher.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_publisher_ElementPaint.EVENTS());
    return Ext_event_publisher_Publisher.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_publisher_ElementPaint.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_publisher_ElementPaint.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_publisher_ElementPaint.PROPERTIES()),
      events.concat(Ext_event_publisher_ElementPaint.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
