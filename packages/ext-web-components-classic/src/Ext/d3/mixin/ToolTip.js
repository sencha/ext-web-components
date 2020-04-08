import Ext_Mixin from '../../../Ext/Mixin.js';

export default class Ext_d3_mixin_ToolTip extends Ext_Mixin {
  static PROPERTIES() { return [
    'tooltip',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_mixin_ToolTip.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_mixin_ToolTip.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_mixin_ToolTip.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_mixin_ToolTip.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_mixin_ToolTip.PROPERTIES()),
      events.concat(Ext_d3_mixin_ToolTip.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
