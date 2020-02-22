import Ext_fx_easing_Linear from '../../../Ext/fx/easing/Linear.js';

export default class Ext_fx_easing_EaseIn extends Ext_fx_easing_Linear {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_EaseIn.PROPERTIES());
    return Ext_fx_easing_Linear.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_easing_EaseIn.EVENTS());
    return Ext_fx_easing_Linear.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_easing_EaseIn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_easing_EaseIn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_easing_EaseIn.PROPERTIES()),
      events.concat(Ext_fx_easing_EaseIn.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
