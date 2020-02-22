import Ext_dd_DDTarget from '../../Ext/dd/DDTarget.js';

export default class Ext_dd_DropTarget extends Ext_dd_DDTarget {
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
    properties = properties.concat(Ext_dd_DropTarget.PROPERTIES());
    return Ext_dd_DDTarget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DropTarget.EVENTS());
    return Ext_dd_DDTarget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DropTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DropTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DropTarget.PROPERTIES()),
      events.concat(Ext_dd_DropTarget.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
