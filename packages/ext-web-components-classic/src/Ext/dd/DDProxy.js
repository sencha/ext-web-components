import Ext_dd_DD from '../../Ext/dd/DD.js';

export default class Ext_dd_DDProxy extends Ext_dd_DD {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dd_DDProxy.PROPERTIES());
    return Ext_dd_DD.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DDProxy.EVENTS());
    return Ext_dd_DD.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DDProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DDProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DDProxy.PROPERTIES()),
      events.concat(Ext_dd_DDProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
