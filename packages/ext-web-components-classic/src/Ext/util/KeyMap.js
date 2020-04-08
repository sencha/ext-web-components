import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_KeyMap extends Ext_Base {
  static PROPERTIES() { return [
    'binding',
    'eventName',
    'ignoreInputFields',
    'priority',
    'processEvent',
    'processEventScope',
    'target',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_KeyMap.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_KeyMap.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_KeyMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_KeyMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_KeyMap.PROPERTIES()),
      events.concat(Ext_util_KeyMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
