import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

export default class Ext_grid_feature_Grouping extends Ext_grid_feature_Feature {
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
    properties = properties.concat(Ext_grid_feature_Grouping.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_Grouping.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_Grouping.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_Grouping.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_Grouping.PROPERTIES()),
      events.concat(Ext_grid_feature_Grouping.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
