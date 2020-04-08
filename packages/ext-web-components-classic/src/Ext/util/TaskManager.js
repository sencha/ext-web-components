import Ext_util_TaskRunner from '../../Ext/util/TaskRunner.js';

export default class Ext_util_TaskManager extends Ext_util_TaskRunner {
  static PROPERTIES() { return [
    'fireIdleEvent',
    'interval',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_TaskManager.PROPERTIES());
    return Ext_util_TaskRunner.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_TaskManager.EVENTS());
    return Ext_util_TaskRunner.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_TaskManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_TaskManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_TaskManager.PROPERTIES()),
      events.concat(Ext_util_TaskManager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
