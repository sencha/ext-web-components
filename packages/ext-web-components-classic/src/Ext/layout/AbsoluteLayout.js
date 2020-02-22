import Ext_layout_container_Anchor from '../../Ext/layout/container/Anchor.js';

export default class Ext_layout_AbsoluteLayout extends Ext_layout_container_Anchor {
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
    properties = properties.concat(Ext_layout_AbsoluteLayout.PROPERTIES());
    return Ext_layout_container_Anchor.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_AbsoluteLayout.EVENTS());
    return Ext_layout_container_Anchor.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_AbsoluteLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_AbsoluteLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_AbsoluteLayout.PROPERTIES()),
      events.concat(Ext_layout_AbsoluteLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
