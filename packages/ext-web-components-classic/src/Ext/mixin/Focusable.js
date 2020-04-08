import Ext_Base from '../../Ext/Base.js';

export default class Ext_mixin_Focusable extends Ext_Base {
  static PROPERTIES() { return [
    'focusCls',
    'focusCls',
  ]};
  static EVENTS() { return [
    {name:'blur', parameters:'sender,event'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_mixin_Focusable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_mixin_Focusable.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_mixin_Focusable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_mixin_Focusable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_mixin_Focusable.PROPERTIES()),
      events.concat(Ext_mixin_Focusable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
