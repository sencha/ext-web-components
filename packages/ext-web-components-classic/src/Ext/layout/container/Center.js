import Ext_layout_container_Fit from '../../../Ext/layout/container/Fit.js';

export default class Ext_layout_container_Center extends Ext_layout_container_Fit {
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
    properties = properties.concat(Ext_layout_container_Center.PROPERTIES());
    return Ext_layout_container_Fit.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Center.EVENTS());
    return Ext_layout_container_Fit.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Center.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Center.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Center.PROPERTIES()),
      events.concat(Ext_layout_container_Center.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
