import Ext_layout_container_Column from '../../../Ext/layout/container/Column.js';

export default class Ext_layout_container_Dashboard extends Ext_layout_container_Column {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
    'reserveScrollbar',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Dashboard.PROPERTIES());
    return Ext_layout_container_Column.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Dashboard.EVENTS());
    return Ext_layout_container_Column.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Dashboard.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Dashboard.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Dashboard.PROPERTIES()),
      events.concat(Ext_layout_container_Dashboard.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
