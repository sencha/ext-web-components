import Ext_data_Model from '../../../Ext/data/Model.js';

export default class Ext_ux_desktop_ShortcutModel extends Ext_data_Model {
  static PROPERTIES() { return [
    'belongsTo',
    'clientIdProperty',
    'convertOnSet',
    'fields',
    'hasMany',
    'hasOne',
    'identifier',
    'idProperty',
    'manyToMany',
    'proxy',
    'schema',
    'summary',
    'validationSeparator',
    'validators',
    'versionProperty',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_desktop_ShortcutModel.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_desktop_ShortcutModel.EVENTS());
    return Ext_data_Model.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_desktop_ShortcutModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_desktop_ShortcutModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_desktop_ShortcutModel.PROPERTIES()),
      events.concat(Ext_ux_desktop_ShortcutModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
