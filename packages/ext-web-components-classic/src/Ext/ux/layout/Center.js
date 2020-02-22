import Ext_layout_container_Fit from '../../../Ext/layout/container/Fit.js';

export default class Ext_ux_layout_Center extends Ext_layout_container_Fit {
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
    properties = properties.concat(Ext_ux_layout_Center.PROPERTIES());
    return Ext_layout_container_Fit.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_layout_Center.EVENTS());
    return Ext_layout_container_Fit.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_layout_Center.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_layout_Center.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_layout_Center.PROPERTIES()),
      events.concat(Ext_ux_layout_Center.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
