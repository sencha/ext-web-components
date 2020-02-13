import Ext_layout_component_Auto from '../../../Ext/layout/component/Auto.js';

export default class Ext_layout_component_BoundList extends Ext_layout_component_Auto {
  static PROPERTIES() { return [
    'animatePolicy',
    'setHeightInDom',
    'setWidthInDom',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_component_BoundList.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_component_BoundList.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_component_BoundList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_component_BoundList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_component_BoundList.PROPERTIES()),
      events.concat(Ext_layout_component_BoundList.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
