import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_Collection extends Ext_Base {
  static PROPERTIES() { return [
    'autoGroup',
    'autoSort',
    'decoder',
    'defaultSortDirection',
    'extraKeys',
    'filters',
    'groupConfig',
    'grouper',
    'groups',
    'keyFn',
    'listeners',
    'multiSortLimit',
    'rootProperty',
    'sorters',
    'source',
    'trackGroups',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'collection,details'},
    {name:'beforeitemchange', parameters:'collection,details'},
    {name:'beforesort', parameters:'collection,sorters'},
    {name:'beginupdate', parameters:'collection'},
    {name:'endupdate', parameters:'collection'},
    {name:'itemchange', parameters:'collection,details'},
    {name:'refresh', parameters:'collection'},
    {name:'remove', parameters:'collection,details'},
    {name:'sort', parameters:'collection'},
    {name:'updatekey', parameters:'collection,details'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_Collection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_Collection.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_Collection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_Collection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_Collection.PROPERTIES()),
      events.concat(Ext_util_Collection.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
