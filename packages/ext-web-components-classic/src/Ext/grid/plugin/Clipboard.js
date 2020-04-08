import Ext_plugin_AbstractClipboard from '../../../Ext/plugin/AbstractClipboard.js';

export default class Ext_grid_plugin_Clipboard extends Ext_plugin_AbstractClipboard {
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
    properties = properties.concat(Ext_grid_plugin_Clipboard.PROPERTIES());
    return Ext_plugin_AbstractClipboard.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_Clipboard.EVENTS());
    return Ext_plugin_AbstractClipboard.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_Clipboard.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_Clipboard.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_Clipboard.PROPERTIES()),
      events.concat(Ext_grid_plugin_Clipboard.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
