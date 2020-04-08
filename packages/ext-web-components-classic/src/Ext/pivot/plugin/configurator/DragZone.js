import Ext_dd_DragZone from '../../../../Ext/dd/DragZone.js';

export default class Ext_pivot_plugin_configurator_DragZone extends Ext_dd_DragZone {
  static PROPERTIES() { return [
    'animRepair',
    'containerScroll',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'repairHighlightColor',
    'scrollEl',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_DragZone.PROPERTIES());
    return Ext_dd_DragZone.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_DragZone.EVENTS());
    return Ext_dd_DragZone.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_configurator_DragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_configurator_DragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_configurator_DragZone.PROPERTIES()),
      events.concat(Ext_pivot_plugin_configurator_DragZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
