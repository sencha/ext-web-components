import Ext_grid_filters_filter_TriFilter from '../../../../Ext/grid/filters/filter/TriFilter.js';

export default class Ext_grid_filters_filter_Number extends Ext_grid_filters_filter_TriFilter {
  static PROPERTIES() { return [
    'active',
    'dataIndex',
    'emptyText',
    'fields',
    'itemDefaults',
    'serializer',
    'updateBuffer',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_Number.PROPERTIES());
    return Ext_grid_filters_filter_TriFilter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_Number.EVENTS());
    return Ext_grid_filters_filter_TriFilter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_filters_filter_Number.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_filters_filter_Number.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_filters_filter_Number.PROPERTIES()),
      events.concat(Ext_grid_filters_filter_Number.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
