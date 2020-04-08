import Ext_layout_component_Auto from '../../Ext/layout/component/Auto.js';

export default class Ext_view_TableLayout extends Ext_layout_component_Auto {
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
    properties = properties.concat(Ext_view_TableLayout.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_view_TableLayout.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_view_TableLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_view_TableLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_view_TableLayout.PROPERTIES()),
      events.concat(Ext_view_TableLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
