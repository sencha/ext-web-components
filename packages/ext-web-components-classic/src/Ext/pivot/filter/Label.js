import Ext_pivot_filter_Base from '../../../Ext/pivot/filter/Base.js';

export default class Ext_pivot_filter_Label extends Ext_pivot_filter_Base {
  static PROPERTIES() { return [
    'caseSensitive',
    'operator',
    'type',
    'value',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_filter_Label.PROPERTIES());
    return Ext_pivot_filter_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_filter_Label.EVENTS());
    return Ext_pivot_filter_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_filter_Label.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_filter_Label.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_filter_Label.PROPERTIES()),
      events.concat(Ext_pivot_filter_Label.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
