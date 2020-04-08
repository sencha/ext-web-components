import Ext_util_Schedulable from '../../../Ext/util/Schedulable.js';

export default class Ext_app_bind_Formula extends Ext_util_Schedulable {
  static PROPERTIES() { return [
    'bind',
    'get',
    'set',
    'single',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Formula.PROPERTIES());
    return Ext_util_Schedulable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_bind_Formula.EVENTS());
    return Ext_util_Schedulable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_bind_Formula.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_bind_Formula.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_bind_Formula.PROPERTIES()),
      events.concat(Ext_app_bind_Formula.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
