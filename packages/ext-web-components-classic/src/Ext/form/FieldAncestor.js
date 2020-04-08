import Ext_Mixin from '../../Ext/Mixin.js';

export default class Ext_form_FieldAncestor extends Ext_Mixin {
  static PROPERTIES() { return [
    'fieldDefaults',
  ]};
  static EVENTS() { return [
    {name:'fielderrorchange', parameters:'sender,field,error'},
    {name:'fieldvaliditychange', parameters:'sender,field,isValid'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_FieldAncestor.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_FieldAncestor.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_FieldAncestor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_FieldAncestor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_FieldAncestor.PROPERTIES()),
      events.concat(Ext_form_FieldAncestor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
