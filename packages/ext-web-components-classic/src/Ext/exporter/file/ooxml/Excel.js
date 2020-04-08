import Ext_exporter_file_ooxml_XmlRels from '../../../../Ext/exporter/file/ooxml/XmlRels.js';

export default class Ext_exporter_file_ooxml_Excel extends Ext_exporter_file_ooxml_XmlRels {
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
    'properties',
    'relationship',
    'tplAttributes',
    'tplNonAttributes',
    'workbook',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_Excel.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_Excel.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_Excel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_Excel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_Excel.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_Excel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
