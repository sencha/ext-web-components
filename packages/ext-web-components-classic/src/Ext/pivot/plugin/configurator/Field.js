import Ext_pivot_dimension_Item from '../../../../Ext/pivot/dimension/Item.js';

export default class Ext_pivot_plugin_configurator_Field extends Ext_pivot_dimension_Item {
  static PROPERTIES() { return [
    'aggregator',
    'align',
    'blankText',
    'caseSensitiveSort',
    'column',
    'dataIndex',
    'direction',
    'editor',
    'exportStyle',
    'filter',
    'flex',
    'formatter',
    'grouperFn',
    'header',
    'id',
    'labelRenderer',
    'renderer',
    'scope',
    'settings',
    'showZeroAsBlank',
    'sortable',
    'sorterFn',
    'sortIndex',
    'values',
    'width',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_Field.PROPERTIES());
    return Ext_pivot_dimension_Item.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_Field.EVENTS());
    return Ext_pivot_dimension_Item.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_configurator_Field.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_configurator_Field.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_configurator_Field.PROPERTIES()),
      events.concat(Ext_pivot_plugin_configurator_Field.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
