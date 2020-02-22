import Ext_chart_axis_layout_Discrete from '../../../../Ext/chart/axis/layout/Discrete.js';

export default class Ext_chart_axis_layout_CombineByIndex extends Ext_chart_axis_layout_Discrete {
  static PROPERTIES() { return [
    'axis',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_CombineByIndex.PROPERTIES());
    return Ext_chart_axis_layout_Discrete.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_CombineByIndex.EVENTS());
    return Ext_chart_axis_layout_Discrete.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_layout_CombineByIndex.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_layout_CombineByIndex.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_layout_CombineByIndex.PROPERTIES()),
      events.concat(Ext_chart_axis_layout_CombineByIndex.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
