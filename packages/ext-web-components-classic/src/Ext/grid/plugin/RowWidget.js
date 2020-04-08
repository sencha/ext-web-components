import Ext_grid_plugin_RowExpander from '../../../Ext/grid/plugin/RowExpander.js';

export default class Ext_grid_plugin_RowWidget extends Ext_grid_plugin_RowExpander {
  static PROPERTIES() { return [
    'bodyBefore',
    'columnWidth',
    'defaultWidgetUI',
    'expandOnDblClick',
    'expandOnEnter',
    'headerWidth',
    'id',
    'lockedTpl',
    'lockedWidget',
    'rowBodyTpl',
    'scrollIntoViewOnExpand',
    'selectRowOnExpand',
    'stateEvents',
    'widget',
  ]};
  static EVENTS() { return [
    {name:'collapsebody', parameters:'rowNode,record,expandRow'},
    {name:'expandbody', parameters:'rowNode,record,expandRow'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_RowWidget.PROPERTIES());
    return Ext_grid_plugin_RowExpander.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_RowWidget.EVENTS());
    return Ext_grid_plugin_RowExpander.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_RowWidget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_RowWidget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_RowWidget.PROPERTIES()),
      events.concat(Ext_grid_plugin_RowWidget.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
