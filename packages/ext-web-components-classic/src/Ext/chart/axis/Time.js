import Ext_chart_axis_Numeric from '../../../Ext/chart/axis/Numeric.js';

export default class Ext_chart_axis_Time extends Ext_chart_axis_Numeric {
  static PROPERTIES() { return [
    'adjustByMajorUnit',
    'background',
    'center',
    'chart',
    'dateFormat',
    'expandRangeBy',
    'fields',
    'floating',
    'fromDate',
    'grid',
    'hidden',
    'id',
    'label',
    'layout',
    'length',
    'limits',
    'linkedTo',
    'listeners',
    'majorTickSteps',
    'margin',
    'maximum',
    'maxZoom',
    'minimum',
    'minorTickSteps',
    'minZoom',
    'needHighPrecision',
    'position',
    'radius',
    'reconcileRange',
    'renderer',
    'rotation',
    'segmenter',
    'style',
    'title',
    'titleMargin',
    'toDate',
    'totalAngle',
    'visibleRange',
  ]};
  static EVENTS() { return [
    {name:'rangechange', parameters:'axis,range,oldRange'},
    {name:'visiblerangechange', parameters:'axis,visibleRange'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_Time.PROPERTIES());
    return Ext_chart_axis_Numeric.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_Time.EVENTS());
    return Ext_chart_axis_Numeric.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_Time.PROPERTIES()),
      events.concat(Ext_chart_axis_Time.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
