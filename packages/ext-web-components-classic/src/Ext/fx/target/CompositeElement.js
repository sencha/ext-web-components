import Ext_fx_target_Element from '../../../Ext/fx/target/Element.js';

export default class Ext_fx_target_CompositeElement extends Ext_fx_target_Element {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_target_CompositeElement.PROPERTIES());
    return Ext_fx_target_Element.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_target_CompositeElement.EVENTS());
    return Ext_fx_target_Element.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_target_CompositeElement.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_target_CompositeElement.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_target_CompositeElement.PROPERTIES()),
      events.concat(Ext_fx_target_CompositeElement.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
