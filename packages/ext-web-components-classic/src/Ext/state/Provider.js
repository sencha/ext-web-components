import Ext_Base from '../../Ext/Base.js';

export default class Ext_state_Provider extends Ext_Base {
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
    properties = properties.concat(Ext_state_Provider.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_state_Provider.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_state_Provider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_state_Provider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_state_Provider.PROPERTIES()),
      events.concat(Ext_state_Provider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
