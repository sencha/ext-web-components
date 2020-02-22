import Ext_exporter_file_ooxml_Xml from '../../../../Ext/exporter/file/ooxml/Xml.js';

export default class Ext_exporter_file_ooxml_CoreProperties extends Ext_exporter_file_ooxml_Xml {
  static PROPERTIES() { return [
    'author',
    'autoGenerateId',
    'autoGenerateKey',
    'contentType',
    'fileName',
    'fileNameTemplate',
    'folder',
    'id',
    'idPrefix',
    'path',
    'relationship',
    'subject',
    'title',
    'tplAttributes',
    'tplNonAttributes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_CoreProperties.PROPERTIES());
    return Ext_exporter_file_ooxml_Xml.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_CoreProperties.EVENTS());
    return Ext_exporter_file_ooxml_Xml.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_CoreProperties.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_CoreProperties.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_CoreProperties.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_CoreProperties.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
