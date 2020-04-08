import Ext_layout_container_Container from '../../../Ext/layout/container/Container.js';

export default class Ext_layout_container_Table extends Ext_layout_container_Container {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'columns',
    'itemCls',
    'tableAttrs',
    'tdAttrs',
    'trAttrs',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Table.PROPERTIES());
    return Ext_layout_container_Container.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Table.EVENTS());
    return Ext_layout_container_Container.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Table.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Table.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Table.PROPERTIES()),
      events.concat(Ext_layout_container_Table.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
