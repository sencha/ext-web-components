import Ext_fx_target_Sprite from '../../../Ext/fx/target/Sprite.js';

export default class Ext_fx_target_CompositeSprite extends Ext_fx_target_Sprite {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_target_CompositeSprite.PROPERTIES());
    return Ext_fx_target_Sprite.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_target_CompositeSprite.EVENTS());
    return Ext_fx_target_Sprite.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_target_CompositeSprite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_target_CompositeSprite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_target_CompositeSprite.PROPERTIES()),
      events.concat(Ext_fx_target_CompositeSprite.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
