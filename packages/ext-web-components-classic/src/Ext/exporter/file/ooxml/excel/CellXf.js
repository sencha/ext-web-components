import Ext_exporter_file_ooxml_excel_CellStyleXf from '../../../../../Ext/exporter/file/ooxml/excel/CellStyleXf.js';

export default class Ext_exporter_file_ooxml_excel_CellXf extends Ext_exporter_file_ooxml_excel_CellStyleXf {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'id',
    'idPrefix',
    'tplAttributes',
    'tplNonAttributes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES());
    return Ext_exporter_file_ooxml_excel_CellStyleXf.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_CellXf.EVENTS());
    return Ext_exporter_file_ooxml_excel_CellStyleXf.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_CellXf.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_CellXf.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
