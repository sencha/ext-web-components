import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_AbstractStore extends Ext_Base {
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
    properties = properties.concat(Ext_data_AbstractStore.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_AbstractStore.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_AbstractStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_AbstractStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_AbstractStore.PROPERTIES()),
      events.concat(Ext_data_AbstractStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
