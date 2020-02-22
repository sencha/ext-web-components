import Ext_event_gesture_Swipe from '../../../Ext/event/gesture/Swipe.js';

export default class Ext_event_gesture_EdgeSwipe extends Ext_event_gesture_Swipe {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_EdgeSwipe.PROPERTIES());
    return Ext_event_gesture_Swipe.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_EdgeSwipe.EVENTS());
    return Ext_event_gesture_Swipe.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_EdgeSwipe.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_EdgeSwipe.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_EdgeSwipe.PROPERTIES()),
      events.concat(Ext_event_gesture_EdgeSwipe.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
