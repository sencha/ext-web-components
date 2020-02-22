import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

export default class Ext_chart_interactions_Rotate extends Ext_chart_interactions_Abstract {
  static PROPERTIES() { return [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'rotation',
  ]};
  static EVENTS() { return [
    {name:'rotate', parameters:'sender,angle'},
    {name:'rotateend', parameters:'sender,angle'},
    {name:'rotatestart', parameters:'sender,angle'},
    {name:'rotationEnd', parameters:'sender,angle'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_Rotate.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_interactions_Rotate.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_interactions_Rotate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_interactions_Rotate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_interactions_Rotate.PROPERTIES()),
      events.concat(Ext_chart_interactions_Rotate.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
