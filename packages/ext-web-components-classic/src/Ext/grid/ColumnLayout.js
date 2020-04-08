import Ext_layout_container_HBox from '../../Ext/layout/container/HBox.js';

export default class Ext_grid_ColumnLayout extends Ext_layout_container_HBox {
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
    properties = properties.concat(Ext_grid_ColumnLayout.PROPERTIES());
    return Ext_layout_container_HBox.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_ColumnLayout.EVENTS());
    return Ext_layout_container_HBox.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_ColumnLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_ColumnLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_ColumnLayout.PROPERTIES()),
      events.concat(Ext_grid_ColumnLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
