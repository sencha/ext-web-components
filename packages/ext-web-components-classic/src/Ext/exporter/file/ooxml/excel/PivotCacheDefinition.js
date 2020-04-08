import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

export default class Ext_exporter_file_ooxml_excel_PivotCacheDefinition extends Ext_exporter_file_ooxml_XmlRels {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'backgroundQuery',
    'cacheFields',
    'cacheRecords',
    'cacheSource',
    'contentType',
    'createdVersion',
    'enableRefresh',
    'fileName',
    'fileNameTemplate',
    'folder',
    'generateTplAttributes',
    'id',
    'idPrefix',
    'index',
    'invalid',
    'minRefreshableVersion',
    'missingItemsLimit',
    'name',
    'nameTemplate',
    'optimizeMemory',
    'path',
    'pivotCache',
    'recordCount',
    'refreshedBy',
    'refreshedDateIso',
    'refreshedVersion',
    'refreshOnLoad',
    'relationship',
    'saveData',
    'supportAdvancedDrill',
    'supportSubquery',
    'tplAttributes',
    'tplNonAttributes',
    'tupleCache',
    'upgradeOnRefresh',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
