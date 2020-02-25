import Ext_data_Range from '../../../Ext/data/Range.js';

export default class Ext_data_virtual_Range extends Ext_data_Range {
  static PROPERTIES() { return [
    'begin',
    'buffer',
    'callback',
    'end',
    'leadingBufferZone',
    'prefetch',
    'scope',
    'store',
    'trailingBufferZone',
    'waitTimeout',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_virtual_Range.PROPERTIES());
    return Ext_data_Range.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_virtual_Range.EVENTS());
    return Ext_data_Range.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_virtual_Range.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_virtual_Range.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_virtual_Range.PROPERTIES()),
      events.concat(Ext_data_virtual_Range.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
