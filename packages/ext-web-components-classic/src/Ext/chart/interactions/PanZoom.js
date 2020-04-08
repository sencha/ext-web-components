import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

export default class Ext_chart_interactions_PanZoom extends Ext_chart_interactions_Abstract {
  static PROPERTIES() { return [
    'axes',
    'chart',
    'doubleTapReset',
    'enabled',
    'gesture',
    'listeners',
    'overflowArrowOptions',
    'panGesture',
    'showOverflowArrows',
    'zoomGesture',
    'zoomOnPan',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_PanZoom.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_interactions_PanZoom.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_interactions_PanZoom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_interactions_PanZoom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_interactions_PanZoom.PROPERTIES()),
      events.concat(Ext_chart_interactions_PanZoom.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
