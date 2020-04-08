import Ext_Base from '../../Ext/Base.js';

export default class Ext_fx_Anim extends Ext_Base {
  static PROPERTIES() { return [
    'alternate',
    'autoEnd',
    'callback',
    'delay',
    'duration',
    'dynamic',
    'easing',
    'from',
    'iterations',
    'keyframes',
    'listeners',
    'remove',
    'reverse',
    'scope',
    'target',
    'to',
  ]};
  static EVENTS() { return [
    {name:'afteranimate', parameters:'sender,startTime'},
    {name:'beforeanimate', parameters:'sender'},
    {name:'lastframe', parameters:'sender,startTime'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_Anim.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_Anim.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_Anim.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_Anim.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_Anim.PROPERTIES()),
      events.concat(Ext_fx_Anim.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
