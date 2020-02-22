import Ext_layout_component_Body from '../../../Ext/layout/component/Body.js';

export default class Ext_layout_component_FieldSet extends Ext_layout_component_Body {
  static PROPERTIES() { return [
    'animatePolicy',
    'setHeightInDom',
    'setWidthInDom',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_component_FieldSet.PROPERTIES());
    return Ext_layout_component_Body.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_component_FieldSet.EVENTS());
    return Ext_layout_component_Body.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_component_FieldSet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_component_FieldSet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_component_FieldSet.PROPERTIES()),
      events.concat(Ext_layout_component_FieldSet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
