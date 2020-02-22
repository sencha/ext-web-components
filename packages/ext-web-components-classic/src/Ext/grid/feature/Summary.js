import Ext_grid_feature_AbstractSummary from '../../../Ext/grid/feature/AbstractSummary.js';

export default class Ext_grid_feature_Summary extends Ext_grid_feature_AbstractSummary {
  static PROPERTIES() { return [
    'dock',
    'listeners',
    'showSummaryRow',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_Summary.PROPERTIES());
    return Ext_grid_feature_AbstractSummary.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_Summary.EVENTS());
    return Ext_grid_feature_AbstractSummary.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_Summary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_Summary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_Summary.PROPERTIES()),
      events.concat(Ext_grid_feature_Summary.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
