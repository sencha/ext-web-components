import Ext_dd_DragDrop from '../../Ext/dd/DragDrop.js';

export default class Ext_dd_DD extends Ext_dd_DragDrop {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dd_DD.PROPERTIES());
    return Ext_dd_DragDrop.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DD.EVENTS());
    return Ext_dd_DragDrop.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DD.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DD.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DD.PROPERTIES()),
      events.concat(Ext_dd_DD.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
