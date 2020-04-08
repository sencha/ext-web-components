import Ext_data_ProxyStore from '../../Ext/data/ProxyStore.js';

export default class Ext_data_BufferedStore extends Ext_data_ProxyStore {
  static PROPERTIES() { return [
    'asynchronousLoad',
    'autoDestroy',
    'autoLoad',
    'autoSort',
    'autoSync',
    'batchUpdateMode',
    'defaultViewSize',
    'fields',
    'filters',
    'groupDir',
    'grouper',
    'groupField',
    'leadingBufferZone',
    'listeners',
    'model',
    'pageSize',
    'proxy',
    'purgePageCount',
    'reloadOnClearSorters',
    'remoteFilter',
    'remoteSort',
    'sorters',
    'sortOnLoad',
    'statefulFilters',
    'storeId',
    'trackRemoved',
    'trailingBufferZone',
    'viewSize',
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
    properties = properties.concat(Ext_data_BufferedStore.PROPERTIES());
    return Ext_data_ProxyStore.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_BufferedStore.EVENTS());
    return Ext_data_ProxyStore.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_BufferedStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_BufferedStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_BufferedStore.PROPERTIES()),
      events.concat(Ext_data_BufferedStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
