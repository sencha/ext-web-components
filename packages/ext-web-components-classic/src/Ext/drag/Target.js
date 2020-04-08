import Ext_drag_Item from '../../Ext/drag/Item.js';

export default class Ext_drag_Target extends Ext_drag_Item {
  static PROPERTIES() { return [
    'accepts',
    'autoDestroy',
    'component',
    'element',
    'groups',
    'invalidCls',
    'listeners',
    'validCls',
  ]};
  static EVENTS() { return [
    {name:'beforedrop', parameters:'sender,info'},
    {name:'dragenter', parameters:'sender,info'},
    {name:'dragleave', parameters:'sender,info'},
    {name:'dragmove', parameters:'sender,info'},
    {name:'drop', parameters:'sender,info'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_drag_Target.PROPERTIES());
    return Ext_drag_Item.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_drag_Target.EVENTS());
    return Ext_drag_Item.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_drag_Target.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_drag_Target.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_drag_Target.PROPERTIES()),
      events.concat(Ext_drag_Target.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
