import Ext_layout_container_Box from '../../Ext/layout/container/Box.js';

export default class Ext_layout_VBoxLayout extends Ext_layout_container_Box {
  static PROPERTIES() { return [
    'align',
    'alignRoundingMethod',
    'animatePolicy',
    'childEls',
    'constrainAlign',
    'enableSplitters',
    'itemCls',
    'overflowHandler',
    'pack',
    'padding',
    'stretchMaxPartner',
    'vertical',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_VBoxLayout.PROPERTIES());
    return Ext_layout_container_Box.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_VBoxLayout.EVENTS());
    return Ext_layout_container_Box.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_VBoxLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_VBoxLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_VBoxLayout.PROPERTIES()),
      events.concat(Ext_layout_VBoxLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
