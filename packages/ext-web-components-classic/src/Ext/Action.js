import Ext_Base from '../Ext/Base.js';

export default class Ext_Action extends Ext_Base {
  static PROPERTIES() { return [
    'disabled',
    'glyph',
    'handler',
    'hidden',
    'iconCls',
    'itemId',
    'scope',
    'text',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Action.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Action.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Action.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Action.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Action.PROPERTIES()),
      events.concat(Ext_Action.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
