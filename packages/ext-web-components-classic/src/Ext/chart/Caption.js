import Ext_Base from '../../Ext/Base.js';

export default class Ext_chart_Caption extends Ext_Base {
  static PROPERTIES() { return [
    'align',
    'alignTo',
    'bind',
    'chart',
    'controller',
    'debug',
    'defaultListenerScope',
    'docked',
    'hidden',
    'listeners',
    'nameable',
    'padding',
    'publishes',
    'rect',
    'reference',
    'session',
    'shareableName',
    'sprite',
    'style',
    'text',
    'twoWayBindable',
    'viewModel',
    'weight',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_Caption.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_Caption.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_Caption.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_Caption.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_Caption.PROPERTIES()),
      events.concat(Ext_chart_Caption.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
