import Ext_util_Observable from '../../../Ext/util/Observable.js';

export default class Ext_ux_event_Driver extends Ext_util_Observable {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'start', parameters:'sender'},
    {name:'stop', parameters:'sender'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Driver.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_event_Driver.EVENTS());
    return Ext_util_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_event_Driver.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_event_Driver.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_event_Driver.PROPERTIES()),
      events.concat(Ext_ux_event_Driver.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
