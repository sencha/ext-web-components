import Ext_sparkline_CanvasBase from '../../Ext/sparkline/CanvasBase.js';

export default class Ext_sparkline_CanvasCanvas extends Ext_sparkline_CanvasBase {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_sparkline_CanvasCanvas.PROPERTIES());
    return Ext_sparkline_CanvasBase.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_sparkline_CanvasCanvas.EVENTS());
    return Ext_sparkline_CanvasBase.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_sparkline_CanvasCanvas.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_sparkline_CanvasCanvas.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_sparkline_CanvasCanvas.PROPERTIES()),
      events.concat(Ext_sparkline_CanvasCanvas.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
