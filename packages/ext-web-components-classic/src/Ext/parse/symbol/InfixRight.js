import Ext_parse_symbol_Infix from '../../../Ext/parse/symbol/Infix.js';

export default class Ext_parse_symbol_InfixRight extends Ext_parse_symbol_Infix {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_InfixRight.PROPERTIES());
    return Ext_parse_symbol_Infix.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_parse_symbol_InfixRight.EVENTS());
    return Ext_parse_symbol_Infix.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_parse_symbol_InfixRight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_parse_symbol_InfixRight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_parse_symbol_InfixRight.PROPERTIES()),
      events.concat(Ext_parse_symbol_InfixRight.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
