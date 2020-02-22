import Ext_app_BaseController from '../../Ext/app/BaseController.js';

export default class Ext_app_ViewController extends Ext_app_BaseController {
  static PROPERTIES() { return [
    'bindings',
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
    properties = properties.concat(Ext_app_ViewController.PROPERTIES());
    return Ext_app_BaseController.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_ViewController.EVENTS());
    return Ext_app_BaseController.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_ViewController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_ViewController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_ViewController.PROPERTIES()),
      events.concat(Ext_app_ViewController.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
