import Ext_view_DragZone from '../../Ext/view/DragZone.js';

export default class Ext_tree_ViewDragZone extends Ext_view_DragZone {
  static PROPERTIES() { return [
    'animRepair',
    'containerScroll',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'repairHighlightColor',
    'scrollEl',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_tree_ViewDragZone.PROPERTIES());
    return Ext_view_DragZone.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_tree_ViewDragZone.EVENTS());
    return Ext_view_DragZone.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_tree_ViewDragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_tree_ViewDragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_tree_ViewDragZone.PROPERTIES()),
      events.concat(Ext_tree_ViewDragZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
