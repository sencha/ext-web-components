import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_grid_plugin_DragDrop extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'allowCopy',
    'containerScroll',
    'copy',
    'ddGroup',
    'dragGroup',
    'dragText',
    'dragZone',
    'dropGroup',
    'dropZone',
    'enableDrag',
    'enableDrop',
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'beforedrop', parameters:'node,data,overModel,dropPosition,dropHandlers'},
    {name:'drop', parameters:'node,data,overModel,dropPosition'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_DragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_DragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_DragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_DragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_DragDrop.PROPERTIES()),
      events.concat(Ext_grid_plugin_DragDrop.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
