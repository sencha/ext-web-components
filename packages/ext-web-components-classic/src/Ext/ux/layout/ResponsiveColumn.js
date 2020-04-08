import Ext_layout_container_Auto from '../../../Ext/layout/container/Auto.js';

export default class Ext_ux_layout_ResponsiveColumn extends Ext_layout_container_Auto {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
    'reserveScrollbar',
    'states',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_layout_ResponsiveColumn.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_layout_ResponsiveColumn.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_layout_ResponsiveColumn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_layout_ResponsiveColumn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_layout_ResponsiveColumn.PROPERTIES()),
      events.concat(Ext_ux_layout_ResponsiveColumn.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
