import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_draw_plugin_SpriteEvents extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'spriteclick', parameters:'sprite,event'},
    {name:'spritedblclick', parameters:'sprite,event'},
    {name:'spritemousedown', parameters:'sprite,event'},
    {name:'spritemousemove', parameters:'sprite,event'},
    {name:'spritemouseout', parameters:'sprite,event'},
    {name:'spritemouseover', parameters:'sprite,event'},
    {name:'spritemouseup', parameters:'sprite,event'},
    {name:'spritetap', parameters:'sprite,event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_plugin_SpriteEvents.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_plugin_SpriteEvents.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_plugin_SpriteEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_plugin_SpriteEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_plugin_SpriteEvents.PROPERTIES()),
      events.concat(Ext_draw_plugin_SpriteEvents.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
