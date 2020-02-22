import Ext_dd_DragTracker from '../../Ext/dd/DragTracker.js';

export default class Ext_resizer_ResizeTracker extends Ext_dd_DragTracker {
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
    properties = properties.concat(Ext_resizer_ResizeTracker.PROPERTIES());
    return Ext_dd_DragTracker.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_resizer_ResizeTracker.EVENTS());
    return Ext_dd_DragTracker.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_resizer_ResizeTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_resizer_ResizeTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_resizer_ResizeTracker.PROPERTIES()),
      events.concat(Ext_resizer_ResizeTracker.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
