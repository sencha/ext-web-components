import Ext_layout_container_Anchor from '../../../Ext/layout/container/Anchor.js';

export default class Ext_layout_container_Absolute extends Ext_layout_container_Anchor {
  static PROPERTIES() { return [
    'anchor',
    'animatePolicy',
    'childEls',
    'defaultAnchor',
    'itemCls',
    'reserveScrollbar',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Absolute.PROPERTIES());
    return Ext_layout_container_Anchor.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Absolute.EVENTS());
    return Ext_layout_container_Anchor.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Absolute.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Absolute.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Absolute.PROPERTIES()),
      events.concat(Ext_layout_container_Absolute.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
