import Ext_form_action_Load from '../../../Ext/form/action/Load.js';

export default class Ext_form_action_DirectLoad extends Ext_form_action_Load {
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
    properties = properties.concat(Ext_form_action_DirectLoad.PROPERTIES());
    return Ext_form_action_Load.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_action_DirectLoad.EVENTS());
    return Ext_form_action_Load.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_action_DirectLoad.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_action_DirectLoad.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_action_DirectLoad.PROPERTIES()),
      events.concat(Ext_form_action_DirectLoad.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
