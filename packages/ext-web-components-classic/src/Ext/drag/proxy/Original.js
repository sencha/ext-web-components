import Ext_drag_proxy_None from '../../../Ext/drag/proxy/None.js';

export default class Ext_drag_proxy_Original extends Ext_drag_proxy_None {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_drag_proxy_Original.PROPERTIES());
    return Ext_drag_proxy_None.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_drag_proxy_Original.EVENTS());
    return Ext_drag_proxy_None.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_drag_proxy_Original.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_drag_proxy_Original.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_drag_proxy_Original.PROPERTIES()),
      events.concat(Ext_drag_proxy_Original.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
