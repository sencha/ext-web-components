import Ext_util_Sorter from '../../Ext/util/Sorter.js';

export default class Ext_util_Grouper extends Ext_util_Sorter {
  static PROPERTIES() { return [
    'direction',
    'groupFn',
    'id',
    'property',
    'root',
    'sorterFn',
    'sortProperty',
    'transform',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Grouper.PROPERTIES());
    return Ext_util_Sorter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Grouper.EVENTS());
    return Ext_util_Sorter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Grouper.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Grouper.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Grouper.PROPERTIES()),
      events.concat(Ext_util_Grouper.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
