import Ext_grid_NavigationModel from '../../Ext/grid/NavigationModel.js';

export default class Ext_tree_NavigationModel extends Ext_grid_NavigationModel {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'cellactivate', parameters:'grid,position,event'},
    {name:'navigate', parameters:'event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_tree_NavigationModel.PROPERTIES());
    return Ext_grid_NavigationModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_tree_NavigationModel.EVENTS());
    return Ext_grid_NavigationModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_tree_NavigationModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_tree_NavigationModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_tree_NavigationModel.PROPERTIES()),
      events.concat(Ext_tree_NavigationModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
