import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Ajax from '../../../Ext/data/proxy/Ajax.js';

var Ext_data_soap_Proxy = /*#__PURE__*/function (_Ext_data_proxy_Ajax) {
  _inheritsLoose(Ext_data_soap_Proxy, _Ext_data_proxy_Ajax);

  Ext_data_soap_Proxy.PROPERTIES = function PROPERTIES() {
    return ['actionMethods', 'api', 'batchActions', 'batchOrder', 'binary', 'cacheString', 'createBodyTpl', 'destroyBodyTpl', 'directionParam', 'envelopeTpl', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'headers', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'operationParam', 'pageParam', 'paramsAsJson', 'password', 'readBodyTpl', 'reader', 'simpleGroupMode', 'simpleSortMode', 'soapAction', 'sortParam', 'startParam', 'targetNamespace', 'timeout', 'updateBodyTpl', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials', 'writeBodyTpl', 'writer'];
  };

  Ext_data_soap_Proxy.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'sender,response,operation'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_soap_Proxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_soap_Proxy.PROPERTIES());
    return Ext_data_proxy_Ajax.getProperties(properties);
  };

  Ext_data_soap_Proxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_soap_Proxy.EVENTS());
    return Ext_data_proxy_Ajax.getEvents(events);
  };

  _createClass(Ext_data_soap_Proxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Ajax.observedAttributes;
      Ext_data_soap_Proxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_soap_Proxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_soap_Proxy(properties, events) {
    return _Ext_data_proxy_Ajax.call(this, properties.concat(Ext_data_soap_Proxy.PROPERTIES()), events.concat(Ext_data_soap_Proxy.EVENTS())) || this;
  }

  var _proto = Ext_data_soap_Proxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Ajax.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Ajax.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_soap_Proxy;
}(Ext_data_proxy_Ajax);

export { Ext_data_soap_Proxy as default };