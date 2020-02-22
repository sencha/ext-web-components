import Ext_resizer_SplitterTracker from '../../Ext/resizer/SplitterTracker.js';

export default class Ext_resizer_BorderSplitterTracker extends Ext_resizer_SplitterTracker {
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
    properties = properties.concat(Ext_resizer_BorderSplitterTracker.PROPERTIES());
    return Ext_resizer_SplitterTracker.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_resizer_BorderSplitterTracker.EVENTS());
    return Ext_resizer_SplitterTracker.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_resizer_BorderSplitterTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_resizer_BorderSplitterTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_resizer_BorderSplitterTracker.PROPERTIES()),
      events.concat(Ext_resizer_BorderSplitterTracker.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
