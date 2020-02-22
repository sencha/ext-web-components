import Ext_parse_Symbol from '../../../Ext/parse/Symbol.js';

export default class Ext_parse_symbol_Infix extends Ext_parse_Symbol {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_Infix.PROPERTIES());
    return Ext_parse_Symbol.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_parse_symbol_Infix.EVENTS());
    return Ext_parse_Symbol.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_parse_symbol_Infix.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_parse_symbol_Infix.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_parse_symbol_Infix.PROPERTIES()),
      events.concat(Ext_parse_symbol_Infix.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
