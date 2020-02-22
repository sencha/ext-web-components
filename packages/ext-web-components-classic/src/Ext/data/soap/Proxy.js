import Ext_data_proxy_Ajax from '../../../Ext/data/proxy/Ajax.js';

export default class Ext_data_soap_Proxy extends Ext_data_proxy_Ajax {
  static PROPERTIES() { return [
    'actionMethods',
    'api',
    'batchActions',
    'batchOrder',
    'binary',
    'cacheString',
    'createBodyTpl',
    'destroyBodyTpl',
    'directionParam',
    'envelopeTpl',
    'extraParams',
    'filterParam',
    'groupDirectionParam',
    'groupParam',
    'headers',
    'idParam',
    'limitParam',
    'listeners',
    'model',
    'noCache',
    'operationParam',
    'pageParam',
    'paramsAsJson',
    'password',
    'readBodyTpl',
    'reader',
    'simpleGroupMode',
    'simpleSortMode',
    'soapAction',
    'sortParam',
    'startParam',
    'targetNamespace',
    'timeout',
    'updateBodyTpl',
    'url',
    'useDefaultXhrHeader',
    'username',
    'withCredentials',
    'writeBodyTpl',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'sender,response,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_soap_Proxy.PROPERTIES());
    return Ext_data_proxy_Ajax.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_soap_Proxy.EVENTS());
    return Ext_data_proxy_Ajax.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_soap_Proxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_soap_Proxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_soap_Proxy.PROPERTIES()),
      events.concat(Ext_data_soap_Proxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
