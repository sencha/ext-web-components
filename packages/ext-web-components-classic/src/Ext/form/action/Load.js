import Ext_form_action_Action from '../../../Ext/form/action/Action.js';

export default class Ext_form_action_Load extends Ext_form_action_Action {
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
    properties = properties.concat(Ext_form_action_Load.PROPERTIES());
    return Ext_form_action_Action.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_action_Load.EVENTS());
    return Ext_form_action_Action.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_action_Load.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_action_Load.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_action_Load.PROPERTIES()),
      events.concat(Ext_form_action_Load.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
