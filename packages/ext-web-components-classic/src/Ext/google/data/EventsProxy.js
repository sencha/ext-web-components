import Ext_google_data_AbstractProxy from '../../../Ext/google/data/AbstractProxy.js';

export default class Ext_google_data_EventsProxy extends Ext_google_data_AbstractProxy {
  static PROPERTIES() { return [
    'api',
    'batchActions',
    'batchOrder',
    'cacheString',
    'directionParam',
    'extraParams',
    'filterParam',
    'groupDirectionParam',
    'groupParam',
    'idParam',
    'limitParam',
    'listeners',
    'model',
    'noCache',
    'pageParam',
    'reader',
    'requiredScripts',
    'simpleGroupMode',
    'simpleSortMode',
    'sortParam',
    'startParam',
    'timeout',
    'url',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'sender,response,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_google_data_EventsProxy.PROPERTIES());
    return Ext_google_data_AbstractProxy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_google_data_EventsProxy.EVENTS());
    return Ext_google_data_AbstractProxy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_google_data_EventsProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_google_data_EventsProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_google_data_EventsProxy.PROPERTIES()),
      events.concat(Ext_google_data_EventsProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
