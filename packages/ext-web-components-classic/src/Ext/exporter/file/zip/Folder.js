import Ext_exporter_file_zip_File from '../../../../Ext/exporter/file/zip/File.js';

export default class Ext_exporter_file_zip_Folder extends Ext_exporter_file_zip_File {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_zip_Folder.PROPERTIES());
    return Ext_exporter_file_zip_File.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_zip_Folder.EVENTS());
    return Ext_exporter_file_zip_File.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_zip_Folder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_zip_Folder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_zip_Folder.PROPERTIES()),
      events.concat(Ext_exporter_file_zip_Folder.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
