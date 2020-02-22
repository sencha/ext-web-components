import Ext_fx_target_CompositeElement from '../../../Ext/fx/target/CompositeElement.js';

export default class Ext_fx_target_CompositeElementCSS extends Ext_fx_target_CompositeElement {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_target_CompositeElementCSS.PROPERTIES());
    return Ext_fx_target_CompositeElement.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_target_CompositeElementCSS.EVENTS());
    return Ext_fx_target_CompositeElement.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_target_CompositeElementCSS.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_target_CompositeElementCSS.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_target_CompositeElementCSS.PROPERTIES()),
      events.concat(Ext_fx_target_CompositeElementCSS.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
