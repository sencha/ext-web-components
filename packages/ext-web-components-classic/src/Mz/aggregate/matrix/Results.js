import Ext_Base from '../../../Ext/Base.js';

export default class Mz_aggregate_matrix_Results extends Ext_Base {
  static PROPERTIES() { return [
    'matrix',
    'resultType',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Mz_aggregate_matrix_Results.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Results.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_aggregate_matrix_Results.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_aggregate_matrix_Results.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_aggregate_matrix_Results.PROPERTIES()),
      events.concat(Mz_aggregate_matrix_Results.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
