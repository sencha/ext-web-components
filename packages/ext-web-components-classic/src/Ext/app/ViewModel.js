import Ext_Base from '../../Ext/Base.js';

export default class Ext_app_ViewModel extends Ext_Base {
  static PROPERTIES() { return [
    'data',
    'formulas',
    'links',
    'parent',
    'root',
    'scheduler',
    'schema',
    'session',
    'stores',
    'view',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_ViewModel.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_ViewModel.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_ViewModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_ViewModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_ViewModel.PROPERTIES()),
      events.concat(Ext_app_ViewModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
