import Ext_util_AbstractMixedCollection from '../../Ext/util/AbstractMixedCollection.js';

export default class Ext_util_MixedCollection extends Ext_util_AbstractMixedCollection {
  static PROPERTIES() { return [
    'allowFunctions',
    'defaultSortDirection',
    'listeners',
    'multiSortLimit',
    'sorters',
    'sortRoot',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'index,o,key'},
    {name:'beforesort', parameters:'me,sorters'},
    {name:'clear', parameters:''},
    {name:'remove', parameters:'o,key'},
    {name:'replace', parameters:'key,old,new'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_MixedCollection.PROPERTIES());
    return Ext_util_AbstractMixedCollection.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_MixedCollection.EVENTS());
    return Ext_util_AbstractMixedCollection.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_MixedCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_MixedCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_MixedCollection.PROPERTIES()),
      events.concat(Ext_util_MixedCollection.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
