import Ext_view_NavigationModel from '../../Ext/view/NavigationModel.js';

export default class Ext_grid_NavigationModel extends Ext_view_NavigationModel {
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
    properties = properties.concat(Ext_grid_NavigationModel.PROPERTIES());
    return Ext_view_NavigationModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_NavigationModel.EVENTS());
    return Ext_view_NavigationModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_NavigationModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_NavigationModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_NavigationModel.PROPERTIES()),
      events.concat(Ext_grid_NavigationModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
