import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

export default class Ext_exporter_file_ooxml_excel_Workbook extends Ext_exporter_file_ooxml_XmlRels {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
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
    'pivotCaches',
    'relationship',
    'sharedStrings',
    'sheets',
    'stylesheet',
    'theme',
    'tplAttributes',
    'tplNonAttributes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_Workbook.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_Workbook.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_Workbook.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_Workbook.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_Workbook.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_Workbook.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
