import Ext_data_proxy_Ajax from '../../../Ext/data/proxy/Ajax.js';

export default class Ext_data_proxy_Rest extends Ext_data_proxy_Ajax {
  static PROPERTIES() { return [
    'actionMethods',
    'api',
    'appendId',
    'batchActions',
    'batchOrder',
    'binary',
    'cacheString',
    'directionParam',
    'extraParams',
    'filterParam',
    'format',
    'groupDirectionParam',
    'groupParam',
    'headers',
    'idParam',
    'limitParam',
    'listeners',
    'model',
    'noCache',
    'pageParam',
    'paramsAsJson',
    'password',
    'reader',
    'simpleGroupMode',
    'simpleSortMode',
    'sortParam',
    'startParam',
    'timeout',
    'url',
    'useDefaultXhrHeader',
    'username',
    'withCredentials',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'sender,response,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_Rest.PROPERTIES());
    return Ext_data_proxy_Ajax.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_proxy_Rest.EVENTS());
    return Ext_data_proxy_Ajax.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_proxy_Rest.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_proxy_Rest.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_proxy_Rest.PROPERTIES()),
      events.concat(Ext_data_proxy_Rest.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
