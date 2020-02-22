import Ext_pivot_result_Base from '../../../Ext/pivot/result/Base.js';

export default class Mz_aggregate_matrix_Result extends Ext_pivot_result_Base {
  static PROPERTIES() { return [
    'leftKey',
    'topKey',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Mz_aggregate_matrix_Result.PROPERTIES());
    return Ext_pivot_result_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Result.EVENTS());
    return Ext_pivot_result_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_aggregate_matrix_Result.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_aggregate_matrix_Result.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_aggregate_matrix_Result.PROPERTIES()),
      events.concat(Mz_aggregate_matrix_Result.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
