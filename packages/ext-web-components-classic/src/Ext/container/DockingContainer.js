import Ext_Base from '../../Ext/Base.js';

export default class Ext_container_DockingContainer extends Ext_Base {
  static PROPERTIES() { return [
    'defaultDockWeights',
  ]};
  static EVENTS() { return [
    {name:'dockedadd', parameters:'sender,component,index'},
    {name:'dockedremove', parameters:'sender,component'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_container_DockingContainer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_container_DockingContainer.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_container_DockingContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_container_DockingContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_container_DockingContainer.PROPERTIES()),
      events.concat(Ext_container_DockingContainer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
