import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

export default class Ext_form_RadioManager extends Ext_util_MixedCollection {
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
    properties = properties.concat(Ext_form_RadioManager.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_RadioManager.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_RadioManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_RadioManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_RadioManager.PROPERTIES()),
      events.concat(Ext_form_RadioManager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
