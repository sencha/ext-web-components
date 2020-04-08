import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_grid_selection_Replicator extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Replicator.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_selection_Replicator.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_selection_Replicator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_selection_Replicator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_selection_Replicator.PROPERTIES()),
      events.concat(Ext_grid_selection_Replicator.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
