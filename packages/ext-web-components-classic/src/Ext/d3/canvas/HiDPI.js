import Ext_Base from '../../../Ext/Base.js';

export default class Ext_d3_canvas_HiDPI extends Ext_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_canvas_HiDPI.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_canvas_HiDPI.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_canvas_HiDPI.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_canvas_HiDPI.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_canvas_HiDPI.PROPERTIES()),
      events.concat(Ext_d3_canvas_HiDPI.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
