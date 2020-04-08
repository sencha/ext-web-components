import Ext_chart_axis_layout_Layout from '../../../../Ext/chart/axis/layout/Layout.js';

export default class Ext_chart_axis_layout_Continuous extends Ext_chart_axis_layout_Layout {
  static PROPERTIES() { return [
    'axis',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_Continuous.PROPERTIES());
    return Ext_chart_axis_layout_Layout.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_Continuous.EVENTS());
    return Ext_chart_axis_layout_Layout.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_layout_Continuous.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_layout_Continuous.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_layout_Continuous.PROPERTIES()),
      events.concat(Ext_chart_axis_layout_Continuous.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
