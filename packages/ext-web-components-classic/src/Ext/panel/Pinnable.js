import Ext_Mixin from '../../Ext/Mixin.js';

export default class Ext_panel_Pinnable extends Ext_Mixin {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_panel_Pinnable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_panel_Pinnable.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_panel_Pinnable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_panel_Pinnable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_panel_Pinnable.PROPERTIES()),
      events.concat(Ext_panel_Pinnable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
