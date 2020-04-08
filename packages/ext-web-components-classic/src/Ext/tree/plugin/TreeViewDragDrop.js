import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_tree_plugin_TreeViewDragDrop extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'allowContainerDrops',
    'allowCopy',
    'allowParentInserts',
    'appendOnly',
    'containerScroll',
    'copy',
    'ddGroup',
    'displayField',
    'dragGroup',
    'dragText',
    'dragZone',
    'dropGroup',
    'dropZone',
    'enableDrag',
    'enableDrop',
    'expandDelay',
    'id',
    'nodeHighlightColor',
    'nodeHighlightOnDrop',
    'nodeHighlightOnRepair',
    'sortOnDrop',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'beforedrop', parameters:'node,data,overModel,dropPosition,dropHandlers'},
    {name:'drop', parameters:'node,data,overModel,dropPosition'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_tree_plugin_TreeViewDragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_tree_plugin_TreeViewDragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_tree_plugin_TreeViewDragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_tree_plugin_TreeViewDragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_tree_plugin_TreeViewDragDrop.PROPERTIES()),
      events.concat(Ext_tree_plugin_TreeViewDragDrop.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
