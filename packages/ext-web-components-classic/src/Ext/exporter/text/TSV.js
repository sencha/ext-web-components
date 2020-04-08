import Ext_exporter_text_CSV from '../../../Ext/exporter/text/CSV.js';

export default class Ext_exporter_text_TSV extends Ext_exporter_text_CSV {
  static PROPERTIES() { return [
    'author',
    'binary',
    'charset',
    'data',
    'fileName',
    'mimeType',
    'showSummary',
    'title',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_text_TSV.PROPERTIES());
    return Ext_exporter_text_CSV.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_text_TSV.EVENTS());
    return Ext_exporter_text_CSV.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_text_TSV.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_text_TSV.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_text_TSV.PROPERTIES()),
      events.concat(Ext_exporter_text_TSV.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
