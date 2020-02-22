import Ext_grid_plugin_Editing from '../../../Ext/grid/plugin/Editing.js';

export default class Ext_grid_plugin_CellEditing extends Ext_grid_plugin_Editing {
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
    properties = properties.concat(Ext_grid_plugin_CellEditing.PROPERTIES());
    return Ext_grid_plugin_Editing.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_CellEditing.EVENTS());
    return Ext_grid_plugin_Editing.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_CellEditing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_CellEditing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_CellEditing.PROPERTIES()),
      events.concat(Ext_grid_plugin_CellEditing.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
