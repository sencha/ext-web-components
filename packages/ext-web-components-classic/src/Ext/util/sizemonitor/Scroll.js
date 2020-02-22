import Ext_util_sizemonitor_Abstract from '../../../Ext/util/sizemonitor/Abstract.js';

export default class Ext_util_sizemonitor_Scroll extends Ext_util_sizemonitor_Abstract {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_sizemonitor_Scroll.PROPERTIES());
    return Ext_util_sizemonitor_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_sizemonitor_Scroll.EVENTS());
    return Ext_util_sizemonitor_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_sizemonitor_Scroll.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_sizemonitor_Scroll.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_sizemonitor_Scroll.PROPERTIES()),
      events.concat(Ext_util_sizemonitor_Scroll.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
