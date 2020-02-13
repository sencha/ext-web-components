import Ext_util_paintmonitor_Abstract from '../../../Ext/util/paintmonitor/Abstract.js';

export default class Ext_util_paintmonitor_CssAnimation extends Ext_util_paintmonitor_Abstract {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_paintmonitor_CssAnimation.PROPERTIES());
    return Ext_util_paintmonitor_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_paintmonitor_CssAnimation.EVENTS());
    return Ext_util_paintmonitor_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_paintmonitor_CssAnimation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_paintmonitor_CssAnimation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_paintmonitor_CssAnimation.PROPERTIES()),
      events.concat(Ext_util_paintmonitor_CssAnimation.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
