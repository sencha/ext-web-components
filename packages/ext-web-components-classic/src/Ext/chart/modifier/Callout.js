import Ext_draw_modifier_Modifier from '../../../Ext/draw/modifier/Modifier.js';

export default class Ext_chart_modifier_Callout extends Ext_draw_modifier_Modifier {
  static PROPERTIES() { return [
    'listeners',
    'lower',
    'sprite',
    'upper',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_modifier_Callout.PROPERTIES());
    return Ext_draw_modifier_Modifier.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_modifier_Callout.EVENTS());
    return Ext_draw_modifier_Modifier.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_modifier_Callout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_modifier_Callout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_modifier_Callout.PROPERTIES()),
      events.concat(Ext_chart_modifier_Callout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
