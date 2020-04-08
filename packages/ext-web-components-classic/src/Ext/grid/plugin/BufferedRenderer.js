import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_grid_plugin_BufferedRenderer extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'id',
    'leadingBufferZone',
    'numFromEdge',
    'scrollToLoadBuffer',
    'stateEvents',
    'synchronousRender',
    'trailingBufferZone',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_BufferedRenderer.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_BufferedRenderer.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_BufferedRenderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_BufferedRenderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_BufferedRenderer.PROPERTIES()),
      events.concat(Ext_grid_plugin_BufferedRenderer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
