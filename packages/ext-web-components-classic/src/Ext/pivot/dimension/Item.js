import Ext_Base from '../../../Ext/Base.js';

export default class Ext_pivot_dimension_Item extends Ext_Base {
  static PROPERTIES() { return [
    'aggregator',
    'align',
    'blankText',
    'caseSensitiveSort',
    'column',
    'dataIndex',
    'direction',
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
    properties = properties.concat(Ext_pivot_dimension_Item.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_dimension_Item.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_dimension_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_dimension_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_dimension_Item.PROPERTIES()),
      events.concat(Ext_pivot_dimension_Item.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
