import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

export default class Ext_exporter_file_ooxml_excel_PivotArea extends Ext_exporter_file_ooxml_Base {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'axis',
    'cacheIndex',
    'collapsedLevelsAreSubtotals',
    'dataOnly',
    'field',
    'fieldPosition',
    'generateTplAttributes',
    'grandCol',
    'grandRow',
    'id',
    'idPrefix',
    'labelOnly',
    'offset',
    'outline',
    'references',
    'tplAttributes',
    'tplNonAttributes',
    'type',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotArea.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotArea.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_PivotArea.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_PivotArea.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_PivotArea.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_PivotArea.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
