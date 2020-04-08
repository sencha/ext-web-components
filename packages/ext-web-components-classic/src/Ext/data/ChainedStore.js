import Ext_data_AbstractStore from '../../Ext/data/AbstractStore.js';

export default class Ext_data_ChainedStore extends Ext_data_AbstractStore {
  static PROPERTIES() { return [
    'autoDestroy',
    'autoSort',
    'filters',
    'groupDir',
    'grouper',
    'groupField',
    'listeners',
    'pageSize',
    'reloadOnClearSorters',
    'remoteFilter',
    'remoteSort',
    'sorters',
    'source',
    'statefulFilters',
    'storeId',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'store,records,index'},
    {name:'beforesort', parameters:'store,sorters'},
    {name:'beginupdate', parameters:''},
    {name:'clear', parameters:'sender'},
    {name:'datachanged', parameters:'sender'},
    {name:'endupdate', parameters:''},
    {name:'refresh', parameters:'sender'},
    {name:'remove', parameters:'store,records,index,isMove'},
    {name:'sort', parameters:'store'},
    {name:'update', parameters:'sender,record,operation,modifiedFieldNames,details'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_ChainedStore.PROPERTIES());
    return Ext_data_AbstractStore.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_ChainedStore.EVENTS());
    return Ext_data_AbstractStore.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_ChainedStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_ChainedStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_ChainedStore.PROPERTIES()),
      events.concat(Ext_data_ChainedStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
