import Ext_Base from '../../Ext/Base.js';

export default class Ext_app_Profile extends Ext_Base {
  static PROPERTIES() { return [
    'application',
    'controllers',
    'listeners',
    'mainView',
    'models',
    'name',
    'namespace',
    'stores',
    'views',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_Profile.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_Profile.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_Profile.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_Profile.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_Profile.PROPERTIES()),
      events.concat(Ext_app_Profile.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
