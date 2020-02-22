import Ext_fx_runner_Css from '../../../Ext/fx/runner/Css.js';

export default class Ext_fx_runner_CssAnimation extends Ext_fx_runner_Css {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_runner_CssAnimation.PROPERTIES());
    return Ext_fx_runner_Css.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_runner_CssAnimation.EVENTS());
    return Ext_fx_runner_Css.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_runner_CssAnimation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_runner_CssAnimation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_runner_CssAnimation.PROPERTIES()),
      events.concat(Ext_fx_runner_CssAnimation.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
