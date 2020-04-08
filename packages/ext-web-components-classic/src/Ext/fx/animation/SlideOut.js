import Ext_fx_animation_Slide from '../../../Ext/fx/animation/Slide.js';

export default class Ext_fx_animation_SlideOut extends Ext_fx_animation_Slide {
  static PROPERTIES() { return [
    'before',
    'direction',
    'easing',
    'listeners',
    'offset',
    'out',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_SlideOut.PROPERTIES());
    return Ext_fx_animation_Slide.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_SlideOut.EVENTS());
    return Ext_fx_animation_Slide.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_SlideOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_SlideOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_SlideOut.PROPERTIES()),
      events.concat(Ext_fx_animation_SlideOut.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
