import Ext_fx_target_Target from '../../../Ext/fx/target/Target.js';

export default class Ext_fx_target_Component extends Ext_fx_target_Target {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_target_Component.PROPERTIES());
    return Ext_fx_target_Target.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_target_Component.EVENTS());
    return Ext_fx_target_Target.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_target_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_target_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_target_Component.PROPERTIES()),
      events.concat(Ext_fx_target_Component.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
