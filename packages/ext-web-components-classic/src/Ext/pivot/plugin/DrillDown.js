import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_pivot_plugin_DrillDown extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'columns',
    'grid',
    'height',
    'id',
    'remoteStore',
    'stateEvents',
    'textWindow',
    'view',
    'width',
  ]};
  static EVENTS() { return [
    {name:'hidedrilldownpanel', parameters:'panel'},
    {name:'showdrilldownpanel', parameters:'panel'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_DrillDown.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_DrillDown.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_DrillDown.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_DrillDown.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_DrillDown.PROPERTIES()),
      events.concat(Ext_pivot_plugin_DrillDown.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
