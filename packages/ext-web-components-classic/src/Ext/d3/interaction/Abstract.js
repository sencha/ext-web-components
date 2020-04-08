import Ext_Base from '../../../Ext/Base.js';

export default class Ext_d3_interaction_Abstract extends Ext_Base {
  static PROPERTIES() { return [
    'component',
    'enabled',
    'gestures',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'destroy', parameters:'interaction'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_interaction_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_interaction_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_interaction_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_interaction_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_interaction_Abstract.PROPERTIES()),
      events.concat(Ext_d3_interaction_Abstract.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
