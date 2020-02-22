import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_grid_plugin_RowExpander extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'bodyBefore',
    'columnWidth',
    'expandOnDblClick',
    'expandOnEnter',
    'headerWidth',
    'id',
    'lockedTpl',
    'rowBodyTpl',
    'scrollIntoViewOnExpand',
    'selectRowOnExpand',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'collapsebody', parameters:'rowNode,record,expandRow'},
    {name:'expandbody', parameters:'rowNode,record,expandRow'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_RowExpander.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_RowExpander.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_RowExpander.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_RowExpander.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_RowExpander.PROPERTIES()),
      events.concat(Ext_grid_plugin_RowExpander.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
