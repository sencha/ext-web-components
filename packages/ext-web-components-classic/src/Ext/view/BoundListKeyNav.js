import Ext_view_NavigationModel from '../../Ext/view/NavigationModel.js';

export default class Ext_view_BoundListKeyNav extends Ext_view_NavigationModel {
  static PROPERTIES() { return [
    'boundList',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'navigate', parameters:'event,keyEvent'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_view_BoundListKeyNav.PROPERTIES());
    return Ext_view_NavigationModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_view_BoundListKeyNav.EVENTS());
    return Ext_view_NavigationModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_view_BoundListKeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_view_BoundListKeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_view_BoundListKeyNav.PROPERTIES()),
      events.concat(Ext_view_BoundListKeyNav.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
