import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

export default class Mz_pivot_feature_PivotEvents extends Ext_grid_feature_Feature {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Mz_pivot_feature_PivotEvents.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_pivot_feature_PivotEvents.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_pivot_feature_PivotEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_pivot_feature_PivotEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_pivot_feature_PivotEvents.PROPERTIES()),
      events.concat(Mz_pivot_feature_PivotEvents.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
