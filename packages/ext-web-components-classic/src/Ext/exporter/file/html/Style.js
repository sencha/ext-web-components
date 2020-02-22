import Ext_exporter_file_Style from '../../../../Ext/exporter/file/Style.js';

export default class Ext_exporter_file_html_Style extends Ext_exporter_file_Style {
  static PROPERTIES() { return [
    'alignment',
    'autoGenerateId',
    'autoGenerateKey',
    'borders',
    'font',
    'format',
    'id',
    'idPrefix',
    'interior',
    'name',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_html_Style.PROPERTIES());
    return Ext_exporter_file_Style.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_html_Style.EVENTS());
    return Ext_exporter_file_Style.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_html_Style.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_html_Style.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_html_Style.PROPERTIES()),
      events.concat(Ext_exporter_file_html_Style.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
