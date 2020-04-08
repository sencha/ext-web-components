import Ext_Base from '../../../../Ext/Base.js';

export default class Ext_pivot_plugin_configurator_FieldSettings extends Ext_Base {
  static PROPERTIES() { return [
    'aggregators',
    'allowed',
    'cls',
    'fixed',
    'formatters',
    'renderers',
    'style',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_FieldSettings.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_configurator_FieldSettings.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES()),
      events.concat(Ext_pivot_plugin_configurator_FieldSettings.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
