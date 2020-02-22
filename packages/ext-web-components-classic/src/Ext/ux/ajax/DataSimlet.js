import Ext_ux_ajax_Simlet from '../../../Ext/ux/ajax/Simlet.js';

export default class Ext_ux_ajax_DataSimlet extends Ext_ux_ajax_Simlet {
  static PROPERTIES() { return [
    'responseHeaders',
    'responseText',
    'responseXML',
    'status',
    'statusText',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_ajax_DataSimlet.PROPERTIES());
    return Ext_ux_ajax_Simlet.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_ajax_DataSimlet.EVENTS());
    return Ext_ux_ajax_Simlet.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_ajax_DataSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_ajax_DataSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_ajax_DataSimlet.PROPERTIES()),
      events.concat(Ext_ux_ajax_DataSimlet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
