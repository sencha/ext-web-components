import Ext_ux_ajax_DataSimlet from '../../../Ext/ux/ajax/DataSimlet.js';

export default class Ext_ux_ajax_XmlSimlet extends Ext_ux_ajax_DataSimlet {
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
    properties = properties.concat(Ext_ux_ajax_XmlSimlet.PROPERTIES());
    return Ext_ux_ajax_DataSimlet.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_ajax_XmlSimlet.EVENTS());
    return Ext_ux_ajax_DataSimlet.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_ajax_XmlSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_ajax_XmlSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_ajax_XmlSimlet.PROPERTIES()),
      events.concat(Ext_ux_ajax_XmlSimlet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
