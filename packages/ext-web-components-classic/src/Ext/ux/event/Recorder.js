import Ext_ux_event_Driver from '../../../Ext/ux/event/Driver.js';

export default class Ext_ux_event_Recorder extends Ext_ux_event_Driver {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'sender,eventDescriptor'},
    {name:'coalesce', parameters:'sender,eventDescriptor'},
    {name:'start', parameters:'sender'},
    {name:'stop', parameters:'sender'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Recorder.PROPERTIES());
    return Ext_ux_event_Driver.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_event_Recorder.EVENTS());
    return Ext_ux_event_Driver.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_event_Recorder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_event_Recorder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_event_Recorder.PROPERTIES()),
      events.concat(Ext_ux_event_Recorder.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
