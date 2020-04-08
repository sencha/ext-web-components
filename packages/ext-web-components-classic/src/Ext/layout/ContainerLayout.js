import Ext_layout_Layout from '../../Ext/layout/Layout.js';

export default class Ext_layout_ContainerLayout extends Ext_layout_Layout {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_ContainerLayout.PROPERTIES());
    return Ext_layout_Layout.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_ContainerLayout.EVENTS());
    return Ext_layout_Layout.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_ContainerLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_ContainerLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_ContainerLayout.PROPERTIES()),
      events.concat(Ext_layout_ContainerLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
