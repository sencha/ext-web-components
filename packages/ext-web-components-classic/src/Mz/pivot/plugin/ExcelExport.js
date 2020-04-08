import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

export default class Mz_pivot_plugin_ExcelExport extends Ext_exporter_Plugin {
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
    properties = properties.concat(Mz_pivot_plugin_ExcelExport.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_pivot_plugin_ExcelExport.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_pivot_plugin_ExcelExport.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_pivot_plugin_ExcelExport.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_pivot_plugin_ExcelExport.PROPERTIES()),
      events.concat(Mz_pivot_plugin_ExcelExport.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
