import Ext_Base from '../../../Ext/Base.js';

export default class Ext_ux_colorpick_Selection extends Ext_Base {
  static PROPERTIES() { return [
    'alphaDecimalFormat',
    'color',
    'format',
    'value',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_Selection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_colorpick_Selection.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_colorpick_Selection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_colorpick_Selection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_colorpick_Selection.PROPERTIES()),
      events.concat(Ext_ux_colorpick_Selection.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
