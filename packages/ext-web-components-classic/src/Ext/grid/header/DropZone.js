import Ext_dd_DropZone from '../../../Ext/dd/DropZone.js';

export default class Ext_grid_header_DropZone extends Ext_dd_DropZone {
  static PROPERTIES() { return [
    'containerScroll',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'overClass',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_header_DropZone.PROPERTIES());
    return Ext_dd_DropZone.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_header_DropZone.EVENTS());
    return Ext_dd_DropZone.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_header_DropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_header_DropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_header_DropZone.PROPERTIES()),
      events.concat(Ext_grid_header_DropZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
