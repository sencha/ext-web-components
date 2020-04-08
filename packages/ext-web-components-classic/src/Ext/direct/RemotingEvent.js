import Ext_direct_Event from '../../Ext/direct/Event.js';

export default class Ext_direct_RemotingEvent extends Ext_direct_Event {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_RemotingEvent.PROPERTIES());
    return Ext_direct_Event.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_RemotingEvent.EVENTS());
    return Ext_direct_Event.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_RemotingEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_RemotingEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_RemotingEvent.PROPERTIES()),
      events.concat(Ext_direct_RemotingEvent.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
