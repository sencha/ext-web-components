import Ext_event_publisher_Dom from '../../../Ext/event/publisher/Dom.js';

export default class Ext_event_publisher_Gesture extends Ext_event_publisher_Dom {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_Gesture.PROPERTIES());
    return Ext_event_publisher_Dom.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_publisher_Gesture.EVENTS());
    return Ext_event_publisher_Dom.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_publisher_Gesture.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_publisher_Gesture.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_publisher_Gesture.PROPERTIES()),
      events.concat(Ext_event_publisher_Gesture.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
