import Ext_ZIndexManager from '../Ext/ZIndexManager.js';

export default class Ext_WindowManager extends Ext_ZIndexManager {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_WindowManager.PROPERTIES());
    return Ext_ZIndexManager.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_WindowManager.EVENTS());
    return Ext_ZIndexManager.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_WindowManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_WindowManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_WindowManager.PROPERTIES()),
      events.concat(Ext_WindowManager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
