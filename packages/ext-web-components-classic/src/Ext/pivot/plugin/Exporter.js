import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

export default class Ext_pivot_plugin_Exporter extends Ext_exporter_Plugin {
  static PROPERTIES() { return [
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'beforedocumentsave', parameters:'pivotGrid,params'},
    {name:'dataready', parameters:'pivotGrid,params'},
    {name:'documentsave', parameters:'pivotGrid,params'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_Exporter.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_Exporter.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_Exporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_Exporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_Exporter.PROPERTIES()),
      events.concat(Ext_pivot_plugin_Exporter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
