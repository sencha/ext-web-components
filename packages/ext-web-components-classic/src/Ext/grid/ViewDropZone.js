import Ext_view_DropZone from '../../Ext/view/DropZone.js';

export default class Ext_grid_ViewDropZone extends Ext_view_DropZone {
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
    properties = properties.concat(Ext_grid_ViewDropZone.PROPERTIES());
    return Ext_view_DropZone.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_ViewDropZone.EVENTS());
    return Ext_view_DropZone.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_ViewDropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_ViewDropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_ViewDropZone.PROPERTIES()),
      events.concat(Ext_grid_ViewDropZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
