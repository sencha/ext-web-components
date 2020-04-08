import Ext_ux_ajax_JsonSimlet from '../../../Ext/ux/ajax/JsonSimlet.js';

export default class Ext_ux_ajax_PivotSimlet extends Ext_ux_ajax_JsonSimlet {
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
    properties = properties.concat(Ext_ux_ajax_PivotSimlet.PROPERTIES());
    return Ext_ux_ajax_JsonSimlet.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_ajax_PivotSimlet.EVENTS());
    return Ext_ux_ajax_JsonSimlet.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_ajax_PivotSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_ajax_PivotSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_ajax_PivotSimlet.PROPERTIES()),
      events.concat(Ext_ux_ajax_PivotSimlet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
