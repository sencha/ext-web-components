import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_grid_plugin_Editing extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'clicksToEdit',
    'default',
    'id',
    'listeners',
    'stateEvents',
    'triggerEvent',
  ]};
  static EVENTS() { return [
    {name:'beforeedit', parameters:'editor,context'},
    {name:'canceledit', parameters:'editor,context'},
    {name:'edit', parameters:'editor,context'},
    {name:'validateedit', parameters:'editor,context'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Editing.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_Editing.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_Editing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_Editing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_Editing.PROPERTIES()),
      events.concat(Ext_grid_plugin_Editing.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
