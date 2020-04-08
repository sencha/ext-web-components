import Ext_Base from '../../../Ext/Base.js';

export default class Mz_aggregate_filter_Abstract extends Ext_Base {
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
    properties = properties.concat(Mz_aggregate_filter_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_aggregate_filter_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_aggregate_filter_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_aggregate_filter_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_aggregate_filter_Abstract.PROPERTIES()),
      events.concat(Mz_aggregate_filter_Abstract.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
