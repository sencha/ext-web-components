import Ext_direct_JsonProvider from '../../Ext/direct/JsonProvider.js';

export default class Ext_direct_PollingProvider extends Ext_direct_JsonProvider {
  static PROPERTIES() { return [
    'baseParams',
    'headers',
    'id',
    'interval',
    'listeners',
    'pollFn',
    'relayedEvents',
    'timeout',
  ]};
  static EVENTS() { return [
    {name:'beforepoll', parameters:'sender'},
    {name:'connect', parameters:'provider'},
    {name:'data', parameters:'provider,e'},
    {name:'disconnect', parameters:'provider'},
    {name:'exception', parameters:'provider,e'},
    {name:'poll', parameters:'sender'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_PollingProvider.PROPERTIES());
    return Ext_direct_JsonProvider.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_PollingProvider.EVENTS());
    return Ext_direct_JsonProvider.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_PollingProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_PollingProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_PollingProvider.PROPERTIES()),
      events.concat(Ext_direct_PollingProvider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
