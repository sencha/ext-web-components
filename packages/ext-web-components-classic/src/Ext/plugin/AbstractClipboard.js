import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

export default class Ext_plugin_AbstractClipboard extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'formats',
    'id',
    'memory',
    'source',
    'stateEvents',
    'system',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_plugin_AbstractClipboard.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_plugin_AbstractClipboard.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_plugin_AbstractClipboard.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_plugin_AbstractClipboard.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_plugin_AbstractClipboard.PROPERTIES()),
      events.concat(Ext_plugin_AbstractClipboard.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
