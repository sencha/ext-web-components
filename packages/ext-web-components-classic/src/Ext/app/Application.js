import Ext_app_Controller from '../../Ext/app/Controller.js';

export default class Ext_app_Application extends Ext_app_Controller {
  static PROPERTIES() { return [
    'appFolder',
    'application',
    'appProperty',
    'control',
    'controllers',
    'currentProfile',
    'defaultToken',
    'extend',
    'glyphFontFamily',
    'id',
    'listen',
    'listeners',
    'mainView',
    'models',
    'moduleClassName',
    'name',
    'namespaces',
    'paths',
    'profiles',
    'quickTips',
    'refs',
    'router',
    'routes',
    'scope',
    'stores',
    'views',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_Application.PROPERTIES());
    return Ext_app_Controller.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_Application.EVENTS());
    return Ext_app_Controller.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_Application.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_Application.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_Application.PROPERTIES()),
      events.concat(Ext_app_Application.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
