import Ext_Base from '../../../Ext/Base.js';

export default class Ext_form_action_Action extends Ext_Base {
  static PROPERTIES() { return [
    'failure',
    'form',
    'headers',
    'method',
    'params',
    'reset',
    'scope',
    'submitEmptyText',
    'success',
    'timeout',
    'url',
    'waitMsg',
    'waitTitle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_action_Action.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_action_Action.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_action_Action.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_action_Action.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_action_Action.PROPERTIES()),
      events.concat(Ext_form_action_Action.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
