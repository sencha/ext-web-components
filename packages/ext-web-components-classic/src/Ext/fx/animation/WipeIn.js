import Ext_fx_Animation from '../../../Ext/fx/Animation.js';

export default class Ext_fx_animation_WipeIn extends Ext_fx_Animation {
  static PROPERTIES() { return [
    'direction',
    'easing',
    'out',
    'type',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_WipeIn.PROPERTIES());
    return Ext_fx_Animation.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_WipeIn.EVENTS());
    return Ext_fx_Animation.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_WipeIn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_WipeIn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_WipeIn.PROPERTIES()),
      events.concat(Ext_fx_animation_WipeIn.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
