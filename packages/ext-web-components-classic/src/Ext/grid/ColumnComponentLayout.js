import Ext_layout_component_Auto from '../../Ext/layout/component/Auto.js';

export default class Ext_grid_ColumnComponentLayout extends Ext_layout_component_Auto {
  static PROPERTIES() { return [
    'animatePolicy',
    'setHeightInDom',
    'setWidthInDom',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_ColumnComponentLayout.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_ColumnComponentLayout.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_ColumnComponentLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_ColumnComponentLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_ColumnComponentLayout.PROPERTIES()),
      events.concat(Ext_grid_ColumnComponentLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
