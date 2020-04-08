import Ext_d3_axis_Axis from '../../../Ext/d3/axis/Axis.js';

export default class Ext_d3_axis_Data extends Ext_d3_axis_Axis {
  static PROPERTIES() { return [
    'axis',
    'component',
    'field',
    'listeners',
    'parent',
    'scale',
    'step',
    'title',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_axis_Data.PROPERTIES());
    return Ext_d3_axis_Axis.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_axis_Data.EVENTS());
    return Ext_d3_axis_Axis.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_axis_Data.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_axis_Data.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_axis_Data.PROPERTIES()),
      events.concat(Ext_d3_axis_Data.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
