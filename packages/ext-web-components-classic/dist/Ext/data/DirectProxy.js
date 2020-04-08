import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Server from '../../Ext/data/proxy/Server.js';

var Ext_data_DirectProxy = /*#__PURE__*/function (_Ext_data_proxy_Serve) {
  _inheritsLoose(Ext_data_DirectProxy, _Ext_data_proxy_Serve);

  Ext_data_DirectProxy.PROPERTIES = function PROPERTIES() {
    return ['api', 'batchActions', 'batchOrder', 'cacheString', 'directFn', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'idParam', 'limitParam', 'listeners', 'metadata', 'model', 'noCache', 'pageParam', 'paramOrder', 'paramsAsHash', 'reader', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'writer'];
  };

  Ext_data_DirectProxy.EVENTS = function EVENTS() {
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

  Ext_data_DirectProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_DirectProxy.PROPERTIES());
    return Ext_data_proxy_Server.getProperties(properties);
  };

  Ext_data_DirectProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_DirectProxy.EVENTS());
    return Ext_data_proxy_Server.getEvents(events);
  };

  _createClass(Ext_data_DirectProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Serve.observedAttributes;
      Ext_data_DirectProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_DirectProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_DirectProxy(properties, events) {
    return _Ext_data_proxy_Serve.call(this, properties.concat(Ext_data_DirectProxy.PROPERTIES()), events.concat(Ext_data_DirectProxy.EVENTS())) || this;
  }

  var _proto = Ext_data_DirectProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Serve.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Serve.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_DirectProxy;
}(Ext_data_proxy_Server);

export { Ext_data_DirectProxy as default };