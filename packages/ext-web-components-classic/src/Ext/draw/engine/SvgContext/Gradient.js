import Ext_Base from '../../../../Ext/Base.js';

export default class Ext_draw_engine_SvgContext_Gradient extends Ext_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_engine_SvgContext_Gradient.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_engine_SvgContext_Gradient.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_engine_SvgContext_Gradient.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_engine_SvgContext_Gradient.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_engine_SvgContext_Gradient.PROPERTIES()),
      events.concat(Ext_draw_engine_SvgContext_Gradient.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
