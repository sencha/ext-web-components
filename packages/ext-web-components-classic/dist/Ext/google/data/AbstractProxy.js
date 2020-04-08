import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Server from '../../../Ext/data/proxy/Server.js';

var Ext_google_data_AbstractProxy = /*#__PURE__*/function (_Ext_data_proxy_Serve) {
  _inheritsLoose(Ext_google_data_AbstractProxy, _Ext_data_proxy_Serve);

  Ext_google_data_AbstractProxy.PROPERTIES = function PROPERTIES() {
    return ['api', 'batchActions', 'batchOrder', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'reader', 'requiredScripts', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'writer'];
  };

  Ext_google_data_AbstractProxy.EVENTS = function EVENTS() {
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

  Ext_google_data_AbstractProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_google_data_AbstractProxy.PROPERTIES());
    return Ext_data_proxy_Server.getProperties(properties);
  };

  Ext_google_data_AbstractProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_google_data_AbstractProxy.EVENTS());
    return Ext_data_proxy_Server.getEvents(events);
  };

  _createClass(Ext_google_data_AbstractProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Serve.observedAttributes;
      Ext_google_data_AbstractProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_google_data_AbstractProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_google_data_AbstractProxy(properties, events) {
    return _Ext_data_proxy_Serve.call(this, properties.concat(Ext_google_data_AbstractProxy.PROPERTIES()), events.concat(Ext_google_data_AbstractProxy.EVENTS())) || this;
  }

  var _proto = Ext_google_data_AbstractProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Serve.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Serve.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_google_data_AbstractProxy;
}(Ext_data_proxy_Server);

export { Ext_google_data_AbstractProxy as default };