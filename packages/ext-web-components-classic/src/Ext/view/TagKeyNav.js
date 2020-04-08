import Ext_view_BoundListKeyNav from '../../Ext/view/BoundListKeyNav.js';

export default class Ext_view_TagKeyNav extends Ext_view_BoundListKeyNav {
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
    properties = properties.concat(Ext_view_TagKeyNav.PROPERTIES());
    return Ext_view_BoundListKeyNav.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_view_TagKeyNav.EVENTS());
    return Ext_view_BoundListKeyNav.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_view_TagKeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_view_TagKeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_view_TagKeyNav.PROPERTIES()),
      events.concat(Ext_view_TagKeyNav.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
