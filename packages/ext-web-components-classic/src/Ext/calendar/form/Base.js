import Ext_Mixin from '../../../Ext/Mixin.js';

export default class Ext_calendar_form_Base extends Ext_Mixin {
  static PROPERTIES() { return [
    'event',
    'view',
  ]};
  static EVENTS() { return [
    {name:'cancel', parameters:'sender'},
    {name:'drop', parameters:'sender'},
    {name:'save', parameters:'sender,context'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_form_Base.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_form_Base.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_form_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_form_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_form_Base.PROPERTIES()),
      events.concat(Ext_calendar_form_Base.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
