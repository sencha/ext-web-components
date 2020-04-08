import Ext_pivot_result_Base from '../../../Ext/pivot/result/Base.js';

export default class Ext_pivot_result_Local extends Ext_pivot_result_Base {
  static PROPERTIES() { return [
    'leftKey',
    'topKey',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_result_Local.PROPERTIES());
    return Ext_pivot_result_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_result_Local.EVENTS());
    return Ext_pivot_result_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_result_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_result_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_result_Local.PROPERTIES()),
      events.concat(Ext_pivot_result_Local.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
