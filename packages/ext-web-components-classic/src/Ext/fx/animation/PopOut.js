import Ext_fx_animation_Pop from '../../../Ext/fx/animation/Pop.js';

export default class Ext_fx_animation_PopOut extends Ext_fx_animation_Pop {
  static PROPERTIES() { return [
    'before',
    'easing',
    'listeners',
    'out',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_PopOut.PROPERTIES());
    return Ext_fx_animation_Pop.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_PopOut.EVENTS());
    return Ext_fx_animation_Pop.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_PopOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_PopOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_PopOut.PROPERTIES()),
      events.concat(Ext_fx_animation_PopOut.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
