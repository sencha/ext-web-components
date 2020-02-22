import Ext_pivot_feature_PivotEvents from '../../../Ext/pivot/feature/PivotEvents.js';

export default class Ext_pivot_feature_PivotView extends Ext_pivot_feature_PivotEvents {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_feature_PivotView.PROPERTIES());
    return Ext_pivot_feature_PivotEvents.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_feature_PivotView.EVENTS());
    return Ext_pivot_feature_PivotEvents.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_feature_PivotView.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_feature_PivotView.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_feature_PivotView.PROPERTIES()),
      events.concat(Ext_pivot_feature_PivotView.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
