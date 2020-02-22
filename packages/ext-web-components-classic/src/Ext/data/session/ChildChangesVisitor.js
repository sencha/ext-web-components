import Ext_data_session_ChangesVisitor from '../../../Ext/data/session/ChangesVisitor.js';

export default class Ext_data_session_ChildChangesVisitor extends Ext_data_session_ChangesVisitor {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_session_ChildChangesVisitor.PROPERTIES());
    return Ext_data_session_ChangesVisitor.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_session_ChildChangesVisitor.EVENTS());
    return Ext_data_session_ChangesVisitor.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_session_ChildChangesVisitor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_session_ChildChangesVisitor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_session_ChildChangesVisitor.PROPERTIES()),
      events.concat(Ext_data_session_ChildChangesVisitor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
