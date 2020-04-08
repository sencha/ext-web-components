import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

export default class Ext_grid_plugin_BaseExporter extends Ext_exporter_Plugin {
  static PROPERTIES() { return [
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'beforedocumentsave', parameters:'grid,params'},
    {name:'dataready', parameters:'grid,params'},
    {name:'documentsave', parameters:'grid,params'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_BaseExporter.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_BaseExporter.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_BaseExporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_BaseExporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_BaseExporter.PROPERTIES()),
      events.concat(Ext_grid_plugin_BaseExporter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
