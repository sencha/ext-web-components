import Ext_exporter_file_Base from '../../../../Ext/exporter/file/Base.js';

export default class Ext_exporter_file_excel_Column extends Ext_exporter_file_Base {
  static PROPERTIES() { return [
    'autoFitWidth',
    'autoGenerateId',
    'autoGenerateKey',
    'caption',
    'hidden',
    'id',
    'idPrefix',
    'index',
    'span',
    'styleId',
    'width',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_excel_Column.PROPERTIES());
    return Ext_exporter_file_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_excel_Column.EVENTS());
    return Ext_exporter_file_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_excel_Column.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_excel_Column.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_excel_Column.PROPERTIES()),
      events.concat(Ext_exporter_file_excel_Column.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
