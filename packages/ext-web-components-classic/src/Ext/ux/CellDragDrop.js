import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

export default class Ext_ux_CellDragDrop extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'applyEmptyText',
    'containerScroll',
    'ddGroup',
    'dragText',
    'dropBackgroundColor',
    'emptyText',
    'enableDrag',
    'enableDrop',
    'enforceType',
    'id',
    'noDropBackgroundColor',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_CellDragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_CellDragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_CellDragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_CellDragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_CellDragDrop.PROPERTIES()),
      events.concat(Ext_ux_CellDragDrop.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
