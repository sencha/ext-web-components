import Ext_mixin_Observable from '../../../Ext/mixin/Observable.js';

export default class Ext_pivot_update_Base extends Ext_mixin_Observable {
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
    properties = properties.concat(Ext_pivot_update_Base.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_update_Base.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_update_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_update_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_update_Base.PROPERTIES()),
      events.concat(Ext_pivot_update_Base.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
