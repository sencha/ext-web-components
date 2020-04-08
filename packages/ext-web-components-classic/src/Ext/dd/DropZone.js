import Ext_dd_DropTarget from '../../Ext/dd/DropTarget.js';

export default class Ext_dd_DropZone extends Ext_dd_DropTarget {
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
    properties = properties.concat(Ext_dd_DropZone.PROPERTIES());
    return Ext_dd_DropTarget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DropZone.EVENTS());
    return Ext_dd_DropTarget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DropZone.PROPERTIES()),
      events.concat(Ext_dd_DropZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
