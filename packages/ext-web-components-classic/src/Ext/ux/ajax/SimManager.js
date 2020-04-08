import Ext_Base from '../../../Ext/Base.js';

export default class Ext_ux_ajax_SimManager extends Ext_Base {
  static PROPERTIES() { return [
    'defaultSimlet',
    'defaultType',
    'delay',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_ajax_SimManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_ajax_SimManager.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_ajax_SimManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_ajax_SimManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_ajax_SimManager.PROPERTIES()),
      events.concat(Ext_ux_ajax_SimManager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
