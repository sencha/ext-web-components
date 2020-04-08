import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_TaskRunner extends Ext_Base {
  static PROPERTIES() { return [
    'fireIdleEvent',
    'interval',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_TaskRunner.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_TaskRunner.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_TaskRunner.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_TaskRunner.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_TaskRunner.PROPERTIES()),
      events.concat(Ext_util_TaskRunner.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
