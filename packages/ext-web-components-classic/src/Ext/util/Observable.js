import Ext_mixin_Observable from '../../Ext/mixin/Observable.js';

export default class Ext_util_Observable extends Ext_mixin_Observable {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Observable.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Observable.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Observable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Observable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Observable.PROPERTIES()),
      events.concat(Ext_util_Observable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
