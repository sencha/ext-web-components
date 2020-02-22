import Ext_drag_Item from '../../Ext/drag/Item.js';

export default class Ext_drag_Source extends Ext_drag_Item {
  static PROPERTIES() { return [
    'activeCls',
    'activeOnLongPress',
    'autoDestroy',
    'component',
    'constrain',
    'describe',
    'element',
    'groups',
    'handle',
    'listeners',
    'proxy',
    'revert',
  ]};
  static EVENTS() { return [
    {name:'beforedragstart', parameters:'sender,info,event'},
    {name:'dragcancel', parameters:'sender,info,event'},
    {name:'dragend', parameters:'sender,info,event'},
    {name:'dragmove', parameters:'sender,info,event'},
    {name:'dragstart', parameters:'sender,info,event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_drag_Source.PROPERTIES());
    return Ext_drag_Item.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_drag_Source.EVENTS());
    return Ext_drag_Item.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_drag_Source.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_drag_Source.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_drag_Source.PROPERTIES()),
      events.concat(Ext_drag_Source.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
