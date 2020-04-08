import Ext_Base from '../../Ext/Base.js';

export default class Ext_state_Stateful extends Ext_Base {
  static PROPERTIES() { return [
    'saveDelay',
    'stateEvents',
    'stateful',
    'stateId',
  ]};
  static EVENTS() { return [
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_state_Stateful.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_state_Stateful.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_state_Stateful.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_state_Stateful.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_state_Stateful.PROPERTIES()),
      events.concat(Ext_state_Stateful.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
