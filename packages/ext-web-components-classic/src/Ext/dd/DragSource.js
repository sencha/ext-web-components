import Ext_dd_DDProxy from '../../Ext/dd/DDProxy.js';

export default class Ext_dd_DragSource extends Ext_dd_DDProxy {
  static PROPERTIES() { return [
    'animRepair',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'repairHighlightColor',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dd_DragSource.PROPERTIES());
    return Ext_dd_DDProxy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DragSource.EVENTS());
    return Ext_dd_DDProxy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DragSource.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DragSource.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DragSource.PROPERTIES()),
      events.concat(Ext_dd_DragSource.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
