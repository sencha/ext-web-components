import Ext_util_translatable_Dom from '../../../Ext/util/translatable/Dom.js';

export default class Ext_util_translatable_CssTransform extends Ext_util_translatable_Dom {
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
    properties = properties.concat(Ext_util_translatable_CssTransform.PROPERTIES());
    return Ext_util_translatable_Dom.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_translatable_CssTransform.EVENTS());
    return Ext_util_translatable_Dom.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_translatable_CssTransform.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_translatable_CssTransform.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_translatable_CssTransform.PROPERTIES()),
      events.concat(Ext_util_translatable_CssTransform.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
