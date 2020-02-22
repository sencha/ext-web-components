import Ext_data_Model from '../../../../Ext/data/Model.js';

export default class Ext_chart_legend_store_Item extends Ext_data_Model {
  static PROPERTIES() { return [
    'belongsTo',
    'clientIdProperty',
    'convertOnSet',
    'fields',
    'hasMany',
    'hasOne',
    'identifier',
    'idProperty',
    'manyToMany',
    'proxy',
    'schema',
    'summary',
    'validationSeparator',
    'validators',
    'versionProperty',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_store_Item.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_legend_store_Item.EVENTS());
    return Ext_data_Model.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_legend_store_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_legend_store_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_legend_store_Item.PROPERTIES()),
      events.concat(Ext_chart_legend_store_Item.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
