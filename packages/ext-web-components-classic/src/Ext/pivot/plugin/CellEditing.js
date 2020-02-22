import Ext_grid_plugin_CellEditing from '../../../Ext/grid/plugin/CellEditing.js';

export default class Ext_pivot_plugin_CellEditing extends Ext_grid_plugin_CellEditing {
  static PROPERTIES() { return [
    'clicksToEdit',
    'default',
    'defaultUpdater',
    'defaultValue',
    'id',
    'listeners',
    'stateEvents',
    'triggerEvent',
  ]};
  static EVENTS() { return [
    {name:'beforeedit', parameters:'editor,context'},
    {name:'canceledit', parameters:'editor,context'},
    {name:'edit', parameters:'editor,context'},
    {name:'pivotbeforeupdate', parameters:'updater'},
    {name:'pivotupdate', parameters:'updater'},
    {name:'validateedit', parameters:'editor,context'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_CellEditing.PROPERTIES());
    return Ext_grid_plugin_CellEditing.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_CellEditing.EVENTS());
    return Ext_grid_plugin_CellEditing.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_CellEditing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_CellEditing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_CellEditing.PROPERTIES()),
      events.concat(Ext_pivot_plugin_CellEditing.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
