import Ext_util_BasicFilter from '../../Ext/util/BasicFilter.js';

export default class Ext_util_Filter extends Ext_util_BasicFilter {
  static PROPERTIES() { return [
    'anyMatch',
    'caseSensitive',
    'convert',
    'disabled',
    'disableOnEmpty',
    'exactMatch',
    'filterFn',
    'id',
    'operator',
    'property',
    'root',
    'scope',
    'serializer',
    'value',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Filter.PROPERTIES());
    return Ext_util_BasicFilter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Filter.EVENTS());
    return Ext_util_BasicFilter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Filter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Filter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Filter.PROPERTIES()),
      events.concat(Ext_util_Filter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
