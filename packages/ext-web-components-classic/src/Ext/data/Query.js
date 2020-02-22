import Ext_util_BasicFilter from '../../Ext/util/BasicFilter.js';

export default class Ext_data_Query extends Ext_util_BasicFilter {
  static PROPERTIES() { return [
    'disabled',
    'format',
    'functions',
    'id',
    'serializer',
    'source',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_Query.PROPERTIES());
    return Ext_util_BasicFilter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Query.EVENTS());
    return Ext_util_BasicFilter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Query.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Query.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Query.PROPERTIES()),
      events.concat(Ext_data_Query.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
