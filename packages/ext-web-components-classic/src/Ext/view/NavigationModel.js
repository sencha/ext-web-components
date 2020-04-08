import Ext_Base from '../../Ext/Base.js';

export default class Ext_view_NavigationModel extends Ext_Base {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'navigate', parameters:'event,keyEvent'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_view_NavigationModel.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_view_NavigationModel.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_view_NavigationModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_view_NavigationModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_view_NavigationModel.PROPERTIES()),
      events.concat(Ext_view_NavigationModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
