import Ext_chart_axis_segmenter_Segmenter from '../../../../Ext/chart/axis/segmenter/Segmenter.js';

export default class Ext_chart_axis_segmenter_Time extends Ext_chart_axis_segmenter_Segmenter {
  static PROPERTIES() { return [
    'axis',
    'step',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_segmenter_Time.PROPERTIES());
    return Ext_chart_axis_segmenter_Segmenter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_segmenter_Time.EVENTS());
    return Ext_chart_axis_segmenter_Segmenter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_segmenter_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_segmenter_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_segmenter_Time.PROPERTIES()),
      events.concat(Ext_chart_axis_segmenter_Time.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
