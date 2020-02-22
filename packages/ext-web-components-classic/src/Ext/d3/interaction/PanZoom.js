import Ext_d3_interaction_Abstract from '../../../Ext/d3/interaction/Abstract.js';

export default class Ext_d3_interaction_PanZoom extends Ext_d3_interaction_Abstract {
  static PROPERTIES() { return [
    'component',
    'contentRect',
    'enabled',
    'gestures',
    'indicator',
    'listeners',
    'pan',
    'viewportRect',
    'zoom',
  ]};
  static EVENTS() { return [
    {name:'destroy', parameters:'interaction'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_interaction_PanZoom.PROPERTIES());
    return Ext_d3_interaction_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_interaction_PanZoom.EVENTS());
    return Ext_d3_interaction_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_interaction_PanZoom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_interaction_PanZoom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_interaction_PanZoom.PROPERTIES()),
      events.concat(Ext_d3_interaction_PanZoom.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
