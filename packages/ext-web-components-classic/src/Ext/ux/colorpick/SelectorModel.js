import Ext_app_ViewModel from '../../../Ext/app/ViewModel.js';

export default class Ext_ux_colorpick_SelectorModel extends Ext_app_ViewModel {
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
    properties = properties.concat(Ext_ux_colorpick_SelectorModel.PROPERTIES());
    return Ext_app_ViewModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_colorpick_SelectorModel.EVENTS());
    return Ext_app_ViewModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_colorpick_SelectorModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_colorpick_SelectorModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_colorpick_SelectorModel.PROPERTIES()),
      events.concat(Ext_ux_colorpick_SelectorModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
