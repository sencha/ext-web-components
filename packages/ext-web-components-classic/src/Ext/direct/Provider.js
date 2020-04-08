import Ext_Base from '../../Ext/Base.js';

export default class Ext_direct_Provider extends Ext_Base {
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
    properties = properties.concat(Ext_direct_Provider.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_Provider.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_Provider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_Provider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_Provider.PROPERTIES()),
      events.concat(Ext_direct_Provider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
