import Ext_Evented from '../../../Ext/Evented.js';

export default class Ext_util_translatable_Abstract extends Ext_Evented {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'animationend', parameters:'sender,x,y'},
    {name:'animationframe', parameters:'sender,x,y'},
    {name:'animationstart', parameters:'sender,x,y'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_translatable_Abstract.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_translatable_Abstract.EVENTS());
    return Ext_Evented.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_translatable_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_translatable_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_translatable_Abstract.PROPERTIES()),
      events.concat(Ext_util_translatable_Abstract.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
