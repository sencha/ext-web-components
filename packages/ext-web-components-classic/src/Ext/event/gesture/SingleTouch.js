import Ext_event_gesture_Recognizer from '../../../Ext/event/gesture/Recognizer.js';

export default class Ext_event_gesture_SingleTouch extends Ext_event_gesture_Recognizer {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_SingleTouch.PROPERTIES());
    return Ext_event_gesture_Recognizer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_SingleTouch.EVENTS());
    return Ext_event_gesture_Recognizer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_SingleTouch.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_SingleTouch.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_SingleTouch.PROPERTIES()),
      events.concat(Ext_event_gesture_SingleTouch.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
