import Ext_fx_easing_Abstract from '../../../Ext/fx/easing/Abstract.js';

export default class Ext_fx_easing_Momentum extends Ext_fx_easing_Abstract {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_Momentum.PROPERTIES());
    return Ext_fx_easing_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_easing_Momentum.EVENTS());
    return Ext_fx_easing_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_easing_Momentum.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_easing_Momentum.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_easing_Momentum.PROPERTIES()),
      events.concat(Ext_fx_easing_Momentum.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
