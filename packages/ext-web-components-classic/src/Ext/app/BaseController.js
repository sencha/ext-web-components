import Ext_Base from '../../Ext/Base.js';

export default class Ext_app_BaseController extends Ext_Base {
  static PROPERTIES() { return [
    'control',
    'id',
    'listen',
    'listeners',
    'routes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_BaseController.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_BaseController.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_BaseController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_BaseController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_BaseController.PROPERTIES()),
      events.concat(Ext_app_BaseController.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
