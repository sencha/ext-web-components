import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

export default class Ext_ux_BoxReorderer extends Ext_plugin_Abstract {
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
    properties = properties.concat(Ext_ux_BoxReorderer.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_BoxReorderer.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_BoxReorderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_BoxReorderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_BoxReorderer.PROPERTIES()),
      events.concat(Ext_ux_BoxReorderer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
