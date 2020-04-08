import Ext_exporter_Base from '../../../Ext/exporter/Base.js';

export default class Ext_exporter_text_Html extends Ext_exporter_Base {
  static PROPERTIES() { return [
    'author',
    'binary',
    'charset',
    'data',
    'defaultStyle',
    'fileName',
    'groupFooterStyle',
    'groupHeaderStyle',
    'mimeType',
    'showSummary',
    'tableFooterStyle',
    'tableHeaderStyle',
    'title',
    'titleStyle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_text_Html.PROPERTIES());
    return Ext_exporter_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_text_Html.EVENTS());
    return Ext_exporter_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_text_Html.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_text_Html.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_text_Html.PROPERTIES()),
      events.concat(Ext_exporter_text_Html.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
