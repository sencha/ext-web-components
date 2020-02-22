import Ext_pivot_update_Base from '../../../Ext/pivot/update/Base.js';

export default class Ext_pivot_update_Uniform extends Ext_pivot_update_Base {
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
    properties = properties.concat(Ext_pivot_update_Uniform.PROPERTIES());
    return Ext_pivot_update_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_update_Uniform.EVENTS());
    return Ext_pivot_update_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_update_Uniform.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_update_Uniform.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_update_Uniform.PROPERTIES()),
      events.concat(Ext_pivot_update_Uniform.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
