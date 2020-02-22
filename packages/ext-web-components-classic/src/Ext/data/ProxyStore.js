import Ext_data_AbstractStore from '../../Ext/data/AbstractStore.js';

export default class Ext_data_ProxyStore extends Ext_data_AbstractStore {
  static PROPERTIES() { return [
    'asynchronousLoad',
    'autoDestroy',
    'autoLoad',
    'autoSort',
    'autoSync',
    'batchUpdateMode',
    'fields',
    'filters',
    'groupDir',
    'grouper',
    'groupField',
    'listeners',
    'model',
    'pageSize',
    'proxy',
    'reloadOnClearSorters',
    'remoteFilter',
    'remoteSort',
    'sorters',
    'sortOnLoad',
    'statefulFilters',
    'storeId',
    'trackRemoved',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'store,records,index'},
    {name:'beforeload', parameters:'store,operation'},
    {name:'beforesort', parameters:'store,sorters'},
    {name:'beforesync', parameters:'options'},
    {name:'beginupdate', parameters:''},
    {name:'clear', parameters:'sender'},
    {name:'datachanged', parameters:'sender'},
    {name:'endupdate', parameters:''},
    {name:'load', parameters:'sender,records,successful,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'refresh', parameters:'sender'},
    {name:'remove', parameters:'store,records,index,isMove'},
    {name:'sort', parameters:'store'},
    {name:'update', parameters:'sender,record,operation,modifiedFieldNames,details'},
    {name:'write', parameters:'store,operation'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_ProxyStore.PROPERTIES());
    return Ext_data_AbstractStore.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_ProxyStore.EVENTS());
    return Ext_data_AbstractStore.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_ProxyStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_ProxyStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_ProxyStore.PROPERTIES()),
      events.concat(Ext_data_ProxyStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
