import Ext_fx_animation_Fade from '../../../Ext/fx/animation/Fade.js';

export default class Ext_fx_animation_FadeOut extends Ext_fx_animation_Fade {
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
    properties = properties.concat(Ext_fx_animation_FadeOut.PROPERTIES());
    return Ext_fx_animation_Fade.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_FadeOut.EVENTS());
    return Ext_fx_animation_Fade.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_FadeOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_FadeOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_FadeOut.PROPERTIES()),
      events.concat(Ext_fx_animation_FadeOut.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
