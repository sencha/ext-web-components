import Ext_pivot_update_Base from '../../../Ext/pivot/update/Base.js';

export default class Ext_pivot_update_Percentage extends Ext_pivot_update_Base {
  static PROPERTIES() { return [
    'dataIndex',
    'leftKey',
    'listeners',
    'matrix',
    'topKey',
    'value',
  ]};
  static EVENTS() { return [
    {name:'beforeupdate', parameters:'updater'},
    {name:'update', parameters:'updater'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_update_Percentage.PROPERTIES());
    return Ext_pivot_update_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_update_Percentage.EVENTS());
    return Ext_pivot_update_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_update_Percentage.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_update_Percentage.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_update_Percentage.PROPERTIES()),
      events.concat(Ext_pivot_update_Percentage.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
