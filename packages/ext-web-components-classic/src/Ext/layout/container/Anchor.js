import Ext_layout_container_Auto from '../../../Ext/layout/container/Auto.js';

export default class Ext_layout_container_Anchor extends Ext_layout_container_Auto {
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
    properties = properties.concat(Ext_layout_container_Anchor.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Anchor.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Anchor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Anchor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Anchor.PROPERTIES()),
      events.concat(Ext_layout_container_Anchor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
