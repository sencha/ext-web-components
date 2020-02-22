import Ext_grid_filters_filter_SingleFilter from '../../../../Ext/grid/filters/filter/SingleFilter.js';

export default class Ext_grid_filters_filter_List extends Ext_grid_filters_filter_SingleFilter {
  static PROPERTIES() { return [
    'active',
    'dataIndex',
    'idField',
    'itemDefaults',
    'labelField',
    'labelIndex',
    'loadingText',
    'loadOnShow',
    'options',
    'serializer',
    'single',
    'store',
    'updateBuffer',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_List.PROPERTIES());
    return Ext_grid_filters_filter_SingleFilter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_List.EVENTS());
    return Ext_grid_filters_filter_SingleFilter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_filters_filter_List.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_filters_filter_List.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_filters_filter_List.PROPERTIES()),
      events.concat(Ext_grid_filters_filter_List.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
