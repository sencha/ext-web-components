import Ext_event_gesture_SingleTouch from '../../../Ext/event/gesture/SingleTouch.js';

export default class Ext_event_gesture_Swipe extends Ext_event_gesture_SingleTouch {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_Swipe.PROPERTIES());
    return Ext_event_gesture_SingleTouch.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_Swipe.EVENTS());
    return Ext_event_gesture_SingleTouch.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_Swipe.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_Swipe.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_Swipe.PROPERTIES()),
      events.concat(Ext_event_gesture_Swipe.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
