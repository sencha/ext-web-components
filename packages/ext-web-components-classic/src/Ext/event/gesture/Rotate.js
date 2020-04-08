import Ext_event_gesture_MultiTouch from '../../../Ext/event/gesture/MultiTouch.js';

export default class Ext_event_gesture_Rotate extends Ext_event_gesture_MultiTouch {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_Rotate.PROPERTIES());
    return Ext_event_gesture_MultiTouch.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_Rotate.EVENTS());
    return Ext_event_gesture_MultiTouch.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_Rotate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_Rotate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_Rotate.PROPERTIES()),
      events.concat(Ext_event_gesture_Rotate.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
