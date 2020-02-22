import Ext_direct_Provider from '../../Ext/direct/Provider.js';

export default class Ext_direct_JsonProvider extends Ext_direct_Provider {
  static PROPERTIES() { return [
    'headers',
    'id',
    'listeners',
    'relayedEvents',
  ]};
  static EVENTS() { return [
    {name:'connect', parameters:'provider'},
    {name:'data', parameters:'provider,e'},
    {name:'disconnect', parameters:'provider'},
    {name:'exception', parameters:'provider,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_JsonProvider.PROPERTIES());
    return Ext_direct_Provider.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_JsonProvider.EVENTS());
    return Ext_direct_Provider.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_JsonProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_JsonProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_JsonProvider.PROPERTIES()),
      events.concat(Ext_direct_JsonProvider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
