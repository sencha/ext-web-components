import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_Floating extends Ext_Base {
  static PROPERTIES() { return [
    'activeCounter',
    'alignOnScroll',
    'alwaysOnTop',
    'animateShadow',
    'constrain',
    'fixed',
    'focusOnToFront',
    'modal',
    'shadow',
    'shadowOffset',
    'shim',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Floating.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Floating.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Floating.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Floating.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Floating.PROPERTIES()),
      events.concat(Ext_util_Floating.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
