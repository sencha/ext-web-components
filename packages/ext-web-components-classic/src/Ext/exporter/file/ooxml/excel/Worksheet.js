import Ext_exporter_file_ooxml_excel_Sheet from '../../../../../Ext/exporter/file/ooxml/excel/Sheet.js';

export default class Ext_exporter_file_ooxml_excel_Worksheet extends Ext_exporter_file_ooxml_excel_Sheet {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'bottomRightRef',
    'columns',
    'contentType',
    'fileName',
    'fileNameTemplate',
    'folder',
    'id',
    'idPrefix',
    'index',
    'name',
    'nameTemplate',
    'path',
    'relationship',
    'rows',
    'topLeftRef',
    'tplAttributes',
    'tplNonAttributes',
    'workbook',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES());
    return Ext_exporter_file_ooxml_excel_Sheet.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_Worksheet.EVENTS());
    return Ext_exporter_file_ooxml_excel_Sheet.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_Worksheet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_Worksheet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
