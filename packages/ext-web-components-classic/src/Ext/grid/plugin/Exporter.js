import Ext_grid_plugin_BaseExporter from '../../../Ext/grid/plugin/BaseExporter.js';

export default class Ext_grid_plugin_Exporter extends Ext_grid_plugin_BaseExporter {
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
    properties = properties.concat(Ext_grid_plugin_Exporter.PROPERTIES());
    return Ext_grid_plugin_BaseExporter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_Exporter.EVENTS());
    return Ext_grid_plugin_BaseExporter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_Exporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_Exporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_Exporter.PROPERTIES()),
      events.concat(Ext_grid_plugin_Exporter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
