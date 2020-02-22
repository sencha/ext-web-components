import Ext_fx_runner_Css from '../Ext/fx/runner/Css.js';

export default class Ext_Animator extends Ext_fx_runner_Css {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Animator.PROPERTIES());
    return Ext_fx_runner_Css.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Animator.EVENTS());
    return Ext_fx_runner_Css.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Animator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Animator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Animator.PROPERTIES()),
      events.concat(Ext_Animator.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
