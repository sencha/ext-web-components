import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

export default class Ext_exporter_file_ooxml_excel_DataField extends Ext_exporter_file_ooxml_Base {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'baseField',
    'baseItem',
    'fld',
    'generateTplAttributes',
    'id',
    'idPrefix',
    'name',
    'numFmtId',
    'showDataAs',
    'subtotal',
    'tplAttributes',
    'tplNonAttributes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_DataField.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_DataField.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_DataField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_DataField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_DataField.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_DataField.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
