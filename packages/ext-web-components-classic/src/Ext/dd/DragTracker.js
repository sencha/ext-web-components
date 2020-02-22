import Ext_Base from '../../Ext/Base.js';

export default class Ext_dd_DragTracker extends Ext_Base {
  static PROPERTIES() { return [
    'autoStart',
    'constrainTo',
    'delegate',
    'el',
    'listeners',
    'overCls',
    'preventDefault',
    'stopEvent',
    'tolerance',
    'trackOver',
  ]};
  static EVENTS() { return [
    {name:'beforedragstart', parameters:'sender,e'},
    {name:'drag', parameters:'sender,e'},
    {name:'dragend', parameters:'sender,e'},
    {name:'dragstart', parameters:'sender,e'},
    {name:'mousedown', parameters:'sender,e'},
    {name:'mousemove', parameters:'sender,e'},
    {name:'mouseout', parameters:'sender,e'},
    {name:'mouseover', parameters:'sender,e,target'},
    {name:'mouseup', parameters:'sender,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dd_DragTracker.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DragTracker.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DragTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DragTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DragTracker.PROPERTIES()),
      events.concat(Ext_dd_DragTracker.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
