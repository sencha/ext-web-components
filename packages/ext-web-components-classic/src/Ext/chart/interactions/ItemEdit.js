import Ext_chart_interactions_ItemHighlight from '../../../Ext/chart/interactions/ItemHighlight.js';

export default class Ext_chart_interactions_ItemEdit extends Ext_chart_interactions_ItemHighlight {
  static PROPERTIES() { return [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'multiTooltips',
    'renderer',
    'sticky',
    'style',
    'tooltip',
  ]};
  static EVENTS() { return [
    {name:'beginitemedit', parameters:'chart,interaction,item'},
    {name:'enditemedit', parameters:'chart,interaction,item,target'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_ItemEdit.PROPERTIES());
    return Ext_chart_interactions_ItemHighlight.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_interactions_ItemEdit.EVENTS());
    return Ext_chart_interactions_ItemHighlight.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_interactions_ItemEdit.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_interactions_ItemEdit.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_interactions_ItemEdit.PROPERTIES()),
      events.concat(Ext_chart_interactions_ItemEdit.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
