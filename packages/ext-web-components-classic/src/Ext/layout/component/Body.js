import Ext_layout_component_Auto from '../../../Ext/layout/component/Auto.js';

export default class Ext_layout_component_Body extends Ext_layout_component_Auto {
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
    properties = properties.concat(Ext_layout_component_Body.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_component_Body.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_component_Body.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_component_Body.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_component_Body.PROPERTIES()),
      events.concat(Ext_layout_component_Body.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
