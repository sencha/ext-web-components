import Ext_ux_BoxReorderer from '../../Ext/ux/BoxReorderer.js';

export default class Ext_ux_TabReorderer extends Ext_ux_BoxReorderer {
  static PROPERTIES() { return [
    'animate',
    'id',
    'itemSelector',
    'listeners',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ChangeIndex', parameters:'sender,container,dragCmp,startIdx,idx'},
    {name:'Drag', parameters:'sender,container,dragCmp,startIdx,idx'},
    {name:'Drop', parameters:'sender,container,dragCmp,startIdx,idx'},
    {name:'StartDrag', parameters:'sender,container,dragCmp,idx'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_TabReorderer.PROPERTIES());
    return Ext_ux_BoxReorderer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_TabReorderer.EVENTS());
    return Ext_ux_BoxReorderer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_TabReorderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_TabReorderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_TabReorderer.PROPERTIES()),
      events.concat(Ext_ux_TabReorderer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
