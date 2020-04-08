import Ext_layout_container_Container from '../../../Ext/layout/container/Container.js';

export default class Ext_layout_container_CheckboxGroup extends Ext_layout_container_Container {
  static PROPERTIES() { return [
    'animatePolicy',
    'autoFlex',
    'childEls',
    'itemCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_CheckboxGroup.PROPERTIES());
    return Ext_layout_container_Container.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_CheckboxGroup.EVENTS());
    return Ext_layout_container_Container.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_CheckboxGroup.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_CheckboxGroup.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_CheckboxGroup.PROPERTIES()),
      events.concat(Ext_layout_container_CheckboxGroup.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
