import Ext_util_Fly from '../../Ext/util/Fly.js';

export default class Ext_parse_Tokenizer extends Ext_util_Fly {
  static PROPERTIES() { return [
    'keywords',
    'operators',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_parse_Tokenizer.PROPERTIES());
    return Ext_util_Fly.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_parse_Tokenizer.EVENTS());
    return Ext_util_Fly.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_parse_Tokenizer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_parse_Tokenizer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_parse_Tokenizer.PROPERTIES()),
      events.concat(Ext_parse_Tokenizer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
