import Ext_state_Provider from '../../Ext/state/Provider.js';

export default class Ext_state_LocalStorageProvider extends Ext_state_Provider {
  static PROPERTIES() { return [
    'listeners',
    'prefix',
  ]};
  static EVENTS() { return [
    {name:'statechange', parameters:'sender,key,value'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_state_LocalStorageProvider.PROPERTIES());
    return Ext_state_Provider.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_state_LocalStorageProvider.EVENTS());
    return Ext_state_Provider.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_state_LocalStorageProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_state_LocalStorageProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_state_LocalStorageProvider.PROPERTIES()),
      events.concat(Ext_state_LocalStorageProvider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
