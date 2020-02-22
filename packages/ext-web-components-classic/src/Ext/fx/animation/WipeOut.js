import Ext_fx_animation_Wipe from '../../../Ext/fx/animation/Wipe.js';

export default class Ext_fx_animation_WipeOut extends Ext_fx_animation_Wipe {
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
    properties = properties.concat(Ext_fx_animation_WipeOut.PROPERTIES());
    return Ext_fx_animation_Wipe.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_WipeOut.EVENTS());
    return Ext_fx_animation_Wipe.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_WipeOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_WipeOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_WipeOut.PROPERTIES()),
      events.concat(Ext_fx_animation_WipeOut.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
