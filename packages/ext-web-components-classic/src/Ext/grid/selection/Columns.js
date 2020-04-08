import Ext_grid_selection_Selection from '../../../Ext/grid/selection/Selection.js';

export default class Ext_grid_selection_Columns extends Ext_grid_selection_Selection {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Columns.PROPERTIES());
    return Ext_grid_selection_Selection.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_selection_Columns.EVENTS());
    return Ext_grid_selection_Selection.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_selection_Columns.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_selection_Columns.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_selection_Columns.PROPERTIES()),
      events.concat(Ext_grid_selection_Columns.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
