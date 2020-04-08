import Ext_data_Store from '../../Ext/data/Store.js';

export default class Ext_data_TreeStore extends Ext_data_Store {
  static PROPERTIES() { return [
    'associatedEntity',
    'asynchronousLoad',
    'autoDestroy',
    'autoLoad',
    'autoSort',
    'autoSync',
    'batchUpdateMode',
    'clearOnLoad',
    'clearOnPageLoad',
    'clearRemovedOnLoad',
    'data',
    'defaultRootId',
    'defaultRootProperty',
    'defaultRootText',
    'fields',
    'filterer',
    'filters',
    'folderSort',
    'groupDir',
    'grouper',
    'groupField',
    'lazyFill',
    'listeners',
    'model',
    'nodeParam',
    'pageSize',
    'parentIdProperty',
    'proxy',
    'reloadOnClearSorters',
    'remoteFilter',
    'remoteSort',
    'role',
    'root',
    'rootVisible',
    'session',
    'sorters',
    'sortOnLoad',
    'statefulFilters',
    'storeId',
    'trackRemoved',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'store,records,index'},
    {name:'beforeload', parameters:'store,operation'},
    {name:'beforeprefetch', parameters:'sender,operation'},
    {name:'beforesort', parameters:'store,sorters'},
    {name:'beforesync', parameters:'options'},
    {name:'beginupdate', parameters:''},
    {name:'clear', parameters:'sender'},
    {name:'commit', parameters:'store'},
    {name:'datachanged', parameters:'sender'},
    {name:'endupdate', parameters:''},
    {name:'filterchange', parameters:'store,filters'},
    {name:'groupchange', parameters:'store,grouper'},
    {name:'load', parameters:'sender,records,successful,operation,node'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'nodeappend', parameters:'sender,node,index'},
    {name:'nodebeforeappend', parameters:'sender,node'},
    {name:'nodebeforecollapse', parameters:'sender'},
    {name:'nodebeforeexpand', parameters:'sender'},
    {name:'nodebeforeinsert', parameters:'sender,node,refNode'},
    {name:'nodebeforemove', parameters:'sender,oldParent,newParent,index'},
    {name:'nodebeforeremove', parameters:'sender,node,isMove'},
    {name:'nodecollapse', parameters:'sender'},
    {name:'nodeexpand', parameters:'sender'},
    {name:'nodeinsert', parameters:'sender,node,refNode'},
    {name:'nodemove', parameters:'sender,oldParent,newParent,index'},
    {name:'noderemove', parameters:'sender,node,isMove,context'},
    {name:'nodesort', parameters:'sender,childNodes'},
    {name:'prefetch', parameters:'sender,records,successful,operation'},
    {name:'refresh', parameters:'sender'},
    {name:'reject', parameters:'store'},
    {name:'remove', parameters:'store,records,index,isMove'},
    {name:'rootchange', parameters:'newRoot,oldRoot'},
    {name:'sort', parameters:'store'},
    {name:'update', parameters:'sender,record,operation,modifiedFieldNames,details'},
    {name:'write', parameters:'store,operation'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_TreeStore.PROPERTIES());
    return Ext_data_Store.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_TreeStore.EVENTS());
    return Ext_data_Store.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_TreeStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_TreeStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_TreeStore.PROPERTIES()),
      events.concat(Ext_data_TreeStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
