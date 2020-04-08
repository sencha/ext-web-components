import Ext_pivot_filter_Base from '../../../Ext/pivot/filter/Base.js';

export default class Ext_pivot_filter_Value extends Ext_pivot_filter_Base {
  static PROPERTIES() { return [
    'caseSensitive',
    'dimensionId',
    'operator',
    'topOrder',
    'topSort',
    'topType',
    'type',
    'value',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_filter_Value.PROPERTIES());
    return Ext_pivot_filter_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_filter_Value.EVENTS());
    return Ext_pivot_filter_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_filter_Value.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_filter_Value.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_filter_Value.PROPERTIES()),
      events.concat(Ext_pivot_filter_Value.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
