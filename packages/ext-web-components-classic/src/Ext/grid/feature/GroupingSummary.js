import Ext_grid_feature_Grouping from '../../../Ext/grid/feature/Grouping.js';

export default class Ext_grid_feature_GroupingSummary extends Ext_grid_feature_Grouping {
  static PROPERTIES() { return [
    'collapseTip',
    'collapsible',
    'depthToIndent',
    'enableGroupingMenu',
    'enableNoGroups',
    'expandTip',
    'groupByText',
    'groupers',
    'groupHeaderTpl',
    'hideGroupedHeader',
    'listeners',
    'remoteRoot',
    'showGroupsText',
    'showSummaryRow',
    'startCollapsed',
  ]};
  static EVENTS() { return [
    {name:'groupclick', parameters:'view,node,group,e'},
    {name:'groupcollapse', parameters:'view,node,group'},
    {name:'groupcontextmenu', parameters:'view,node,group,e'},
    {name:'groupdblclick', parameters:'view,node,group,e'},
    {name:'groupexpand', parameters:'view,node,group'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_GroupingSummary.PROPERTIES());
    return Ext_grid_feature_Grouping.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_GroupingSummary.EVENTS());
    return Ext_grid_feature_Grouping.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_GroupingSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_GroupingSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_GroupingSummary.PROPERTIES()),
      events.concat(Ext_grid_feature_GroupingSummary.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
