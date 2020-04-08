import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Server from '../../../Ext/data/proxy/Server.js';

var Ext_data_proxy_Ajax = /*#__PURE__*/function (_Ext_data_proxy_Serve) {
  _inheritsLoose(Ext_data_proxy_Ajax, _Ext_data_proxy_Serve);

  Ext_data_proxy_Ajax.PROPERTIES = function PROPERTIES() {
    return ['actionMethods', 'api', 'batchActions', 'batchOrder', 'binary', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'headers', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'paramsAsJson', 'password', 'reader', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials', 'writer'];
  };

  Ext_data_proxy_Ajax.EVENTS = function EVENTS() {
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

  Ext_data_proxy_Ajax.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_Ajax.PROPERTIES());
    return Ext_data_proxy_Server.getProperties(properties);
  };

  Ext_data_proxy_Ajax.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_proxy_Ajax.EVENTS());
    return Ext_data_proxy_Server.getEvents(events);
  };

  _createClass(Ext_data_proxy_Ajax, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Serve.observedAttributes;
      Ext_data_proxy_Ajax.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_proxy_Ajax.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_proxy_Ajax(properties, events) {
    return _Ext_data_proxy_Serve.call(this, properties.concat(Ext_data_proxy_Ajax.PROPERTIES()), events.concat(Ext_data_proxy_Ajax.EVENTS())) || this;
  }

  var _proto = Ext_data_proxy_Ajax.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Serve.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Serve.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_proxy_Ajax;
}(Ext_data_proxy_Server);

export { Ext_data_proxy_Ajax as default };