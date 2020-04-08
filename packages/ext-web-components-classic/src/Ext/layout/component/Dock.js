import Ext_layout_component_Component from '../../../Ext/layout/component/Component.js';

export default class Ext_layout_component_Dock extends Ext_layout_component_Component {
  static PROPERTIES() { return [
    'animatePolicy',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_component_Dock.PROPERTIES());
    return Ext_layout_component_Component.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_component_Dock.EVENTS());
    return Ext_layout_component_Component.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_component_Dock.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_component_Dock.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_component_Dock.PROPERTIES()),
      events.concat(Ext_layout_component_Dock.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
