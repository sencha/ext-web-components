import Ext_util_XTemplateParser from '../../Ext/util/XTemplateParser.js';

export default class Ext_util_XTemplateCompiler extends Ext_util_XTemplateParser {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_XTemplateCompiler.PROPERTIES());
    return Ext_util_XTemplateParser.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_XTemplateCompiler.EVENTS());
    return Ext_util_XTemplateParser.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_XTemplateCompiler.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_XTemplateCompiler.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_XTemplateCompiler.PROPERTIES()),
      events.concat(Ext_util_XTemplateCompiler.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
