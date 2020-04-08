import Ext_util_Region from '../../Ext/util/Region.js';

export default class Ext_util_Point extends Ext_util_Region {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Point.PROPERTIES());
    return Ext_util_Region.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Point.EVENTS());
    return Ext_util_Region.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Point.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Point.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Point.PROPERTIES()),
      events.concat(Ext_util_Point.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
